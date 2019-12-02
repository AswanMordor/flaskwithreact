import time
from selenium import webdriver
from selenium.webdriver.common.by import By


def test_trendingtest():
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
    time.sleep(2)
    assert driver.current_url == "https://fitfinderstatic.appspot.com/home"
    trending_navitem = driver.find_element_by_xpath("//a[contains(., 'Trending')]")
    trending_navitem.click()
    time.sleep(5)
    assert driver.current_url == "https://fitfinderstatic.appspot.com/trending"
    driver.close()
    print("Trending test: SUCCESS")

