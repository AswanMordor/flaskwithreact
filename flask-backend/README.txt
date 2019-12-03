export GOOGLE_APPLICATION_CREDENTIALS="/Users/ap/Projects/flaskwithreact/flask-backend/FitFinder-6f47aeb6b98e.json"\

subprocess.run(['gcloud', 'beta', 'auth', 'application-default', 'print-access-token'],
                                           check=True,
                                           stdout=subprocess.PIPE,
                                           universal_newlines=True,
                                           shell=True).stdout