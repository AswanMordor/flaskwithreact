import flask

app = flask.Flask(__name__,template_folder='static/templates')


@app.route('/')
def index():
    return flask.render_template("index.html", token="Sucessful Flask Test")


if __name__ == '__main__':
    app.run(debug=True)
