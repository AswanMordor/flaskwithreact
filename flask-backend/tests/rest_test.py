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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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
    url = "https://fitfinderstatic.appspot.com/temp"

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


# tests LINK should return 405
def test_restlink():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("LINK", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests UNLINK should return 405
def test_restunlink():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("UNLINK", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests PURGE should return 405
def test_restpurge():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("PURGE", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests LOCK should return 405
def test_restlock():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("LOCK", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests UNLOCK should return 405
def test_restunlock():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("UNLOCK", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests PROPFIND should return 405
def test_restunpropfind():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("PROPFIND", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)

# tests VIEW should return 405
def test_restunview():
    url = "https://fitfinderstatic.appspot.com/temp"

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

    response = requests.request("VIEW", url, headers=headers)
    # 405 method not allowed
    assert response.status_code == 405
    assert response.url == url
    print(url)
    print(response.status_code)
    print(response.text)