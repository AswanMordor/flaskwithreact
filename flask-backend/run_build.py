import subprocess

target_types = ["list", "build", "test", "deploy react", "deploy server local", "deploy dev local ", "deploy gcloud"]
target = input("Enter a target: ")
if target == "list":
    print("Target Types: \n", target_types)
if target == "deploy":
    print("Deploying frontend from /react-frontend")
    print("This will NOT build the frontend for server deployment, use build or deploy server local instead")
    print("Running npm start from /react-frontend")
    npm_start = subprocess.run(['npm', 'start'], check=True, stdout=subprocess.PIPE, universal_newlines=True,
                               shell=True)
# run() returns a CompletedProcess object if it was successful
# errors in the created process are raised here too
process = subprocess.run(['echo', 'how are you?'], check=True, stdout=subprocess.PIPE, universal_newlines=True,
                         shell=True)
output = process.stdout

print(output)
