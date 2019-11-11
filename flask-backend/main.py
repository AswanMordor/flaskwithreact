import flask
from flask import request

app = flask.Flask(__name__)


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


if __name__ == '__main__':
    app.run(debug=True)
