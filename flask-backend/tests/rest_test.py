import pytest
import requests


# you need to install requests

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


# tests PUT should return 405
def test_restput():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("PUT", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)


# tests PATCH should return 405
def test_restpatch():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("PATCH", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)


# tests DELETE should return 405
def test_restdelete():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("DELETE", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)


# tests COPY should return 405
def test_restcopy():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("COPY", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests HEAD should return 200
def test_resthead():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("HEAD", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 200
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests OPTION should return 200
def test_restoptions():
    url = "http://127.0.0.1:5000/temp"

    headers = {
        'User-Agent': "PostmanRuntime/7.19.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "127.0.0.1:5000",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0",
        'Connection': "keep-alive",
        'cache-control': "no-cache"
    }

    response = requests.request("OPTIONS", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 200
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)
