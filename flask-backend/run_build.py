import subprocess
import webbrowser

target_types = ["list", "build", "test", "deploy", "deploy dev", "deploy gcloud"]
target = input("Enter a target: ")
if target == "list":
    print("Target Types: \n", target_types)
if target == "deploy":
    print("Deploying locally via python server from /react-frontend")
    print("Running npm run build from /react-frontend")
    npm_run_build = subprocess.run(['cd', '../react-frontend', '&&', 'npm', 'run', "build"], check=True,
                                   stdout=subprocess.PIPE,
                                   universal_newlines=True,
                                   shell=True)
    print(npm_run_build)
    print("Running main.py from /flask-backend")
    python_main = subprocess.run(['cd', '../flask-backend', '&&', 'python', 'main.py'], check=True,
                                 stdout=subprocess.PIPE,
                                 universal_newlines=True,
                                 shell=True)
    print(python_main)
    webbroswer_address = "http://www.google.com"
    webbrowser.open_new_tab(webbroswer_address)
