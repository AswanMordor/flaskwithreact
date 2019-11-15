import os
import subprocess
import sys
import threading
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
    browser_thread = threading.Thread(target=open_browser, args=())
    browser_thread.setDaemon(True)
    browser_thread.start()


def open_browser():
    print("Attempting to open the browser to localhost:5000")
    webbroswer_address = "http://127.0.0.1:5000/"
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


def test_os():
    os.system("cd ../flask-backend && pytest")


target_types = ["list", "build", "test", "deploy", "deploy dev", "deploy gcloud", "test dev"]
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
    run_thread = threading.Thread(target=run_server, args=())
    run_thread.setDaemon(True)
    run_thread.start()
    test_os()
    sys.exit(0)
if target == "test dev":
    print("Running Tests WITHOUT building")
    run_thread = threading.Thread(target=run_server, args=())
    run_thread.setDaemon(True)
    run_thread.start()
    test_os()
    sys.exit(0)
if target == "deploy dev":
    print("Running main.py WITHOUT build")
    run_server()
if target == "deploy gcloud":
    print("Deploying project to gcloud from flask-backend")
    build()
    gcloud_deploy()
