from os import path
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import random

def scrape(word):
    word.replace(" ", "+")
    
    url = "https://www.amazon.com/s?k=" + word + "&ref=nb_sb_noss"
     #driver = webdriver.Chrome("/Applications/Google Chrome.app")
    driver = webdriver.Chrome("/Users/kashishpatel/Downloads/chromedriver")
    driver.get(url)
    time.sleep(4)

    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")
    table = soup.find_all(attrs={"data-component-type":"s-search-result"})
    with open("items.txt", "a") as f:
        for item in table:
            cleaned = clean(item)
            if cleaned:
                f.write("%s\n%s\n%s\n\n"%(str(cleaned[0]), str(cleaned[1]), str(cleaned[2])))
                return cleaned
    



def clean(data):
    name = None
    price = None
    word = data.text
    if "Sponsored" not in word:
        price = data.find(attrs={"data-a-color":"base"})                                        # finds price
        if price:
            price = price.text.strip()[0:int(0.5*len(price.text.strip()))]
            name = data.find("span", class_ = "a-size-base-plus")   # finds name
            if name:
                name = name.text.strip()
                image = data.find("img")
                imgSource = image['src']                   # finds number of ratings
                if imgSource:
                    return [name, price, imgSource]
    return None

with open("items_to_be_scraped.txt") as f:
    list = f.readlines()
    for line in list:
        scrape(line)
