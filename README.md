# flaskwithreact
Welcome to FitFinder's Temporary Github Page

To set up from a fresh pull/clone:
1. Delete the ./react-frontend/build folder if it exists
2. Delete any node-modules in ./react-frontend
3. Run npm install from the ./react-frontend directory (add any additional packages as nessicary)
4. Run run_build.py from the ./flask-backend directory and use the ' deploy ' command to build the porject and deploy it locally

run_build.py commands: 
1. list : lists all available commands
2. deploy : builds the frontend and deploys a local instance of the flask server
3. deploy dev : deploys a local instance of the flask server without building (any chnages to the frontend will not be shown)
4. build : builds the frontend without deploying a local flask server instance
5. test : runs the deploy command and runs all pytest tests
6. test dev : runs the deploy dev command and runs all pytest tests
