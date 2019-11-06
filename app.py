import flask
import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./fitfinder.json")
firebase_app = firebase_admin.initialize_app(cred)

read = firestore.client()

app = flask.Flask(__name__,template_folder='static/templates')


@app.route('/')
def index():
    data = read.collection(u'Brands').document(u'H&M').collection(u'Products').document(u'4fKUQqPlAdNiBM3jIG67')
    try:
        doc = data.get()
        print(u'Document data: {}'.format(doc.to_dict()))
        name = (doc.to_dict())['Name']
        return flask.render_template("index.html", token=name)
    except google.cloud.exceptions.NotFound:
        print(u'No such document!')


if __name__ == '__main__':
    app.run(debug=True)
