from selenium import webdriver
import pytest


def test_logintest():
    driver = webdriver.Chrome()
    driver.get(url="https://fitfinderstatic.appspot.com/")
    enter_button = driver.find_element_by_id("enter-button")
    enter_button.click()
    assert "404" not in driver.page_source
    email_field = driver.find_element_by_id("email")
    email_field.send_keys("t@gmail.com")
    password_field = driver.find_element_by_id("password")
    password_field.send_keys("tesuto")
    login_button = driver.find_element_by_id("login-button")
    login_button.click()
    # possible bad failure point
    assert driver.find_element_by_id("home") != 0
    driver.close()
    print("Login test: SUCCESS")