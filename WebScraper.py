from os import path
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import random

def scrape(word, file):
    word.replace(" ", "+")
    
    url = "https://www.amazon.com/s?k=" + word + "&ref=nb_sb_noss"
    options = webdriver.ChromeOptions()
    options.binary_location = "/Applications/Google Chrome.app"
    options.add_argument("headless")
    driver = webdriver.Chrome(chrome_options=options)
    driver.get(url)
    time.sleep(4)

    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")
    table = soup.find_all(attrs={"data-component-type":"s-search-result"})
    names = []
    with open(file, "w") as f:
        for item in table:
            cleaned = clean(item)
            if cleaned:
                f.write("%s\n%s\n%s\n%s\n\n"%(str(cleaned[0]), str(cleaned[1]), str(cleaned[2]), str(cleaned[3])))
                return cleaned
    



def clean(data):
    name = None
    rating = None
    numRatings = None
    price = None
    word = data.text
    if "Sponsored" not in word:
        price = data.find(attrs={"data-a-color":"base"})                                        # finds price
        if price:
            price = price.text.strip()[0:int(0.5*len(price.text.strip()))]
            rating = data.find("span", class_ = "a-icon-alt")                                   # finds rating
            if rating:
                rating = rating.text.strip()
                name = data.find("span", class_ = "a-size-medium a-color-base a-text-normal")   # finds name
                if name:
                    name = name.text.strip()
                    numRatings = data.find("span", class_ = "a-size-base")                      # finds number of ratings
                    if numRatings:
                        numRatings = numRatings.text.strip()
                        item = [name, rating, numRatings, price]
                        return item
    return None

def playGame(word1, word2):
    item1 = scrape(word1, "item1.txt")
    item2 = scrape(word2, "item2.text")

    name1 = item1[0]
    name2 = item2[0]
    guess = int(input("Which one is more expensive: \n%s\n\nOR\n\n%s\n" % (name1, name2)))
    price1 = float(item1[3][1:])
    price2 = float(item2[3][1:])
    more = None
    less = None
    if price1 > price2:
        more = item1[0]
        less = item2[0]
        answer = 1
    else:
        more = item2[0]
        less = item1[0]
        answer = 2
    if guess == answer:
        print("CORRECT! \n%s\n\ncosts more then \n\n%s" % (more, less))
    else:
        print("INCORRECT! \n%s\n\ncosts more then \n\n%s" % (more, less))
    print("%s costs %s\n%s costs %s" % (item1[0], item1[3], item2[0], item2[3]))

playGame("apple watch", "TV")

