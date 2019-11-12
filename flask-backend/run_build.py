import subprocess
import webbrowser


def build():
    print("Running npm run build from /react-frontend")
    npm_run_build = subprocess.run(['cd', '../react-frontend', '&&', 'npm', 'run', "build"], check=True,
                                   stdout=subprocess.PIPE,
                                   universal_newlines=True,
                                   shell=True)
    print(npm_run_build)


def run_server():
    print("Running main.py from /flask-backend")
    python_main = subprocess.run(['cd', '../flask-backend', '&&', 'python', 'main.py'], check=True,
                                 stdout=subprocess.PIPE,
                                 universal_newlines=True,
                                 shell=True)
    print(python_main)
    webbroswer_address = "http://www.google.com"
    webbrowser.open_new_tab(webbroswer_address)


def gcloud_deploy():
    print("Running gcloud app deploy")
    gcloud_app_deploy = subprocess.run(['cd', '../flask-backend', '&&', 'gcloud', 'app', 'deploy'], check=True,
                                       stdout=subprocess.PIPE,
                                       universal_newlines=True,
                                       shell=True)
    print(gcloud_app_deploy)


def test():
    pytest = subprocess.run(['cd', '../flask-backend', '&&', 'pytest'], check=True,
                            stdout=subprocess.PIPE,
                            universal_newlines=True,
                            shell=True)
    print(pytest)


target_types = ["list", "build", "test", "deploy", "deploy dev", "deploy gcloud"]
target = input("Enter a target: ")
if target == "list":
    print("Target Types: \n", target_types)
if target == "deploy":
    print("Deploying locally via python server from /react-frontend")
    build()
    run_server()
if target == "build":
    print("Building frontend from /react-frontend WITHOUT deployment")
    build()
if target == "test":
    print("Running Tests")
    build()
    run_server()
    test()
if target == "deploy dev":
    print("Local gcloud deployment not yet supported")
if target == "deploy gcloud":
    print("Deploying project to gcloud from flask-backend")
    build()
    gcloud_deploy()
