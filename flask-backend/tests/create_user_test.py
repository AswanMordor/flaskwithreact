import time
from selenium import webdriver
import uuid
import pytest


def test_jointest():
    driver = webdriver.Chrome()
    driver.get(url="https://fitfinderstatic.appspot.com/")
    enter_button = driver.find_element_by_id("enter-button")
    enter_button.click()
    assert "404" not in driver.page_source
    join_button = driver.find_element_by_id("join-button")
    join_button.click()
    # possible bad failure point
    assert driver.find_element_by_id("join-page") != 0
    email_field = driver.find_element_by_id("email")
    password_field = driver.find_element_by_id("password")
    email = str(uuid.uuid4()) + "@gmail.com"
    email_field.send_keys(email)
    password = str(uuid.uuid4()) + "TEST"
    password_field.send_keys(password)
    join_page_button = driver.find_element_by_id("join-button")
    join_page_button.click()
    time.sleep(2)
    assert driver.current_url == "https://fitfinderstatic.appspot.com/home"
    driver.close()
    print("Join test: SUCCESS")
