from selenium import webdriver

driver = webdriver.Chrome()
driver.get(url="http://127.0.0.1:5000/")
enter_button = driver.find_element_by_id("enter-button")
enter_button.click()
assert "404" not in driver.page_source
email_field = driver.find_element_by_id("email")
email_field.send_keys("t@gmail.com")
password_field = driver.find_element_by_id("password")
password_field.send_keys("tesuto")
login_button = driver.find_element_by_id("login-button")
login_button.click()
assert "--!!HOME!!--" not in driver.page_source
driver.close()
