from pathlib import Path
import flask
from flask import request
from google.cloud import storage
import uuid
import requests
from flask_cors import CORS
import os

import subprocess
import json

import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore

from werkzeug.utils import secure_filename

from werkzeug.utils import secure_filename

app = flask.Flask(__name__)
CORS(app)

cred = credentials.Certificate("FitFinder-905180b5f6de.json")

firebase_app = firebase_admin.initialize_app(cred)

read = firestore.client()


def explicit():
    from google.cloud import storage
    # Explicitly use service account credentials by specifying the private key
    # file.
    storage_client = storage.Client.from_service_account_json(
        str(Path("FitFinder-905180b5f6de.json").absolute()))

    # Make an authenticated API request
    buckets = list(storage_client.list_buckets())
    print(buckets)


explicit()


@app.route('/', defaults={'path': '/'})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html", token="Successful Flask Test")


@app.route('/')
def index():
    return flask.render_template("index.html", token="Successful Flask Test")


@app.route('/temp', methods=('GET', 'POST'))
def tempCom():
    response = flask.jsonify({'res': "ERROR"})
    if request.method == 'POST':
        response = flask.jsonify({'res': 'POST REQUEST RECEIVED FROM SERVER'})
    if request.method == 'GET':
        response = flask.jsonify({'res': 'GET REQUEST RECEIVED FROM SERVER'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/productSearch', methods=('GET', 'POST'))
def productSearch():
    bucket_name = "fitfinder-3e49c.appspot.com"
    imageName = str(uuid.uuid4())
    print(imageName)
    file = request.files['file']
    filename = secure_filename(file.filename)
    storage_client = storage.Client.from_service_account_json(
        str(Path("FitFinder-905180b5f6de.json").absolute()))
    bucket = storage_client.get_bucket(bucket_name)
    filepath, file_extension = os.path.splitext("./" + filename)
    blob = bucket.blob(imageName + file_extension)
    response = flask.jsonify({"res": "DONE"})
    response.headers.add('Access-Control-Allow-Origin', '*')

    file.save("./" + filename)
    os.rename("./" + filename, "./" + imageName + file_extension)

    blob.upload_from_filename("./" + imageName + file_extension)
    print("./" + imageName + file_extension)

    os.remove("./" + imageName + file_extension)

    headers = {
        "Content-Type": "application/json"
    }
    print("got to payload definition")
    payload = {
        "requests": [
            {
                "image": {
                    "source": {
                        "gcsImageUri": "gs://fitfinder-3e49c.appspot.com/" + imageName + file_extension
                    }
                },
                "features": [
                    {
                        "type": "PRODUCT_SEARCH"
                    }
                ],
                "imageContext": {
                    "productSearchParams": {
                        "productSet": "projects/fitfinder-3e49c/locations/us-west1/productSets/H&M-Mens",
                        "productCategories": [
                            "apparel-v2"
                        ]
                    }
                }
            }
        ]
    }

    gcsResponse = requests.post('https://vision.googleapis.com/v1/images:annotate?key'
                                '=AIzaSyAZJiwWzXaz9Oduwy5NUHnX6ptzuE3If7E', json=payload, headers=headers)
    if gcsResponse.status_code != 200:
        response.jsonify({"results": "Server Error"})
    print("gcs reponse is: ", gcsResponse.text)
    results = [i["product"]["name"].split("/")[-1] for i in
               gcsResponse.json()["responses"][0]["productSearchResults"]["results"]]  # parse names from gscResponse
    response = flask.jsonify({"results": results})

    os.mkdir("static/react/imgs/")
    for result in results:
        print("Attempting to save: ", result)
        file_blob = bucket.blob(result)
        file_blob.download_to_filename("static/react/imgs/" + result)
    return response


@app.route('/trendingUpdate', methods=('GET', 'POST'))
def trendingUpdate():
    data = read.collection(u'Brands').document(u'H&M').collection(u'Products').where(u'likes', u'>', 0).order_by(
        u'likes', direction=firestore.Query.DESCENDING).limit(10).stream()

    try:

        array = {}
        for doc in data:
            dict = doc.to_dict()
            prodInf = {
                'img': dict['Image'],
                'name': dict['Name'],
                'link': dict['Link'],
                'price': dict['Price'],
                'likes': dict['likes']
            }
            # prodInf['key'] = doc.id
            array[doc.id] = prodInf

        app.config["JSON_SORT_KEYS"] = False
        response = flask.jsonify({'products': array})
        app.config["JSON_SORT_KEYS"] = True
        return response
    except google.cloud.exceptions.NotFound:
        print("trendingUpdate failed")
        return "trendingUpdate failed"


@app.route('/addLike', methods=('GET', 'POST'))
def addLike():
    global read
    key = request.args['key']
    read.collection(u'Brands').document(u'H&M').collection(u'Products').document(key).update(
        {"likes": firestore.Increment(1)})
    return 'Sucessful'


if __name__ == '__main__':
    app.run(debug=True)
