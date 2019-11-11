import pytest
import requests


# Used to return the value 2
def wrong():
    return 2


# tests to see if the initial pytest works
def test_pytestworks():
    assert (1 == 1)


# tests to see if raising errors is currently working
def test_pytesterror():
    wrong()
    pytest.raises(AssertionError)


# tests the local server for the GET REQUEST
def test_restget():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Postman-Token': "9386e6f2-6f09-49ec-bdd3-b9390a5a3536,32438768-ac88-487f-a794-68a6ffc49107",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("GET", url, headers=headers)
    assert response.status_code == 200
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)


# tests the local server for the POST REQUEST
def test_restpost():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Postman-Token': "feade69e-b193-4b8a-adb1-5818a2b3e8f1,d8fa9cd0-fde6-4567-80e3-e42690f88e1e",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("POST", url, headers=headers)

    assert response.status_code == 200
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)
