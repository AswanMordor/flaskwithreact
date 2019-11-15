from pathlib import Path

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


def explicit():
    from google.cloud import storage

    # win_export_commend = subprocess.run(
    #    ['setx', 'GOOGLE_APPLICATION_CREDENTIALS', str(Path("FitFinder-905180b5f6de.json").absolute())],
    #   check=True,
    #  stdout=subprocess.PIPE,
    #  universal_newlines=True,
    #  shell=True).stdout
    # print("win export is: ", win_export_commend)
    # Explicitly use service account credentials by specifying the private key
    # file.
    storage_client = storage.Client.from_service_account_json(
        str(Path("FitFinder-905180b5f6de.json").absolute()))

    # Make an authenticated API request
    buckets = list(storage_client.list_buckets())
    print(buckets)


explicit()


@app.route('/')
def index():
    return flask.render_template("index.html", token="Sucessful Flask Test")


@app.route('/temp', methods=('GET', 'POST'))
def tempCom():
    print("sdfg")
    response = flask.jsonify({'res': "ERROR"})
    if request.method == 'POST':
        response = flask.jsonify({'res': 'POST REQUEST RECEIVED FROM SERVER'})
    if request.method == 'GET':
        response = flask.jsonify({'res': 'GET REQUEST RECEIVED FROM SERVER'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/productSearch', methods=('GET', 'POST'))
def productSearch():
    print("sdfg")
    bucket_name = "fitfinder-3e49c.appspot.com"
    imageName = str(uuid.uuid4())
    storage_client = storage.Client.from_service_account_json(
        str(Path("FitFinder-905180b5f6de.json").absolute()))
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(imageName)
    response = flask.jsonify({"res": "DONE"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    with open(imageName, "wb") as outfile:
        outfile.write(request.data)
    with open(imageName, "rb") as my_file:
        blob.upload_from_file(my_file)
    os.remove(imageName)

    # mport google.auth.transport.requests
    # creds, projects = google.auth.default()

    # # creds.valid is False, and creds.token is None
    # Need to refresh credentials to populate those

    # auth_req = google.auth.transport.requests.Request()
    # creds.refresh(auth_req)

    # Now you can use creds.token
    # authToken = str(creds.token)
    # authToken = authToken.replace("\n", "")
    # print(authToken)
    headers = {  # TODO: get auth token dynamically
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
    gcsResponse = requests.post('https://vision.googleapis.com/v1/images:annotate?key'
                                '=AIzaSyAZJiwWzXaz9Oduwy5NUHnX6ptzuE3If7E', json=payload, headers=headers)
    print("sdfghjk", flush=True)
    print(str(response))
    print(str(gcsResponse.text))
    results = [i["product"]["name"].split("/")[-1] for i in
               gcsResponse.json()["responses"][0]["productSearchResults"]["results"]]  # parse names from gscResponse
    response = flask.jsonify({"results": results})
    return response


if __name__ == '__main__':
    app.run(debug=True)
