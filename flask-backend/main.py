import flask
from flask import request
from google.cloud import storage
import uuid
import requests
from flask_cors import CORS
import os
import subprocess

app = flask.Flask(__name__)

app = flask.Flask(__name__)
CORS(app)


@app.route('/', defaults={'path': '/'})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html", token="Sucessful Flask Test")


@app.route('/')
def index():
    return flask.render_template("index.html", token="Sucessful Flask Test")


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
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(imageName)
    response = flask.jsonify({"res": "DONE"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    with open(imageName, "wb") as outfile:
        outfile.write(request.data)
    with open(imageName, "rb") as my_file:
        blob.upload_from_file(my_file)
    os.remove(imageName)
    authToken = "Bearer " + subprocess.run(['gcloud beta auth application-default print-access-token'], check=True,
                                           stdout=subprocess.PIPE,
                                           universal_newlines=True,
                                           shell=True).stdout
    authToken = authToken.replace("\n", "")
    headers = {  # TODO: get auth token dynamically
        "Authorization": authToken,
        "Content-Type": "application/json"
    }
    payload = {
        "requests": [
            {
                "image": {
                    "source": {
                        "gcsImageUri": "gs://fitfinder-3e49c.appspot.com/" + imageName
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
    gcsResponse = requests.post(
        'https://vision.googleapis.com/v1/images:annotate', json=payload, headers=headers)
    if (gcsResponse.status_code != 200):
        response.jsonify({"results": "Server Error"})
    results = [i["product"]["name"].split("/")[-1] for i in
               gcsResponse.json()["responses"][0]["productSearchResults"]["results"]]  # parse names from gscResponse
    response = flask.jsonify({"results": results})
    return response


if __name__ == '__main__':
    app.run(debug=True)
