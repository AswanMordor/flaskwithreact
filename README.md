# flaskwithreact
Welcome to FitFinder's Temporary Github Page

<b>IF run_build.py is not working on your machine, running the server is a simple 2 step process:</b></br>
Preprocess:
1. If this is a fresh pull, delete any node_modules folders and in the ./react-frontend directrory run ' npm install '.
</br>
Running the server:
</br>1. To compile the React code into something flask can use, in the ./react-frontend directory run ' npm run build'.
</br>2. To deploy the flask server locally, in the ./flask-backend directory run main.py in your python environment.

</n></br>
<b>Troubleshooting</b></br>
<b>Config Files</b></br>
<i>Problem:</i> 'npm run build' completes, but does not update the UI on the server
</br> 
<i>Solution:</i> If a build folder is being created in ./react-frontend then most likely the package.json has been modified to use the default react scripts instead of the ones needed for flask. Make the "scripts" attribute in ./react-frontend/package.json look like this:
</br>
"scripts": { </br>
    "start": "node ../react-frontend/scripts/start.js", </br>
    "build": "node ../react-frontend/scripts/build.js",</br>
    "test": "node ../react-frontend/scripts/test.js",</br>
    "eject": "react-scripts eject"</br>
  },</br></br>


<b>Using the run_build.py </b></br>
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
