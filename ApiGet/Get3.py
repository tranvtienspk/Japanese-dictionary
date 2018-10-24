#Python 2.7.6
#RestfulClient.py

import requests
import json


ulrs = [
 "https://mazii.net/api/jlptgrammar/4/30/0",
"https://mazii.net/api/jlptgrammar/4/30/1",
"https://mazii.net/api/jlptgrammar/4/30/2",
"https://mazii.net/api/jlptgrammar/4/30/3",
"https://mazii.net/api/jlptgrammar/4/30/4",
"https://mazii.net/api/jlptgrammar/4/30/5",
"https://mazii.net/api/jlptgrammar/4/30/6",
"https://mazii.net/api/jlptgrammar/4/30/7",
"https://mazii.net/api/jlptgrammar/4/30/8",
"https://mazii.net/api/jlptgrammar/4/30/9",
"https://mazii.net/api/jlptgrammar/4/30/10",
"https://mazii.net/api/jlptgrammar/4/30/11",
"https://mazii.net/api/jlptgrammar/4/30/12",
"https://mazii.net/api/jlptgrammar/4/30/13",
"https://mazii.net/api/jlptgrammar/4/30/14",
"https://mazii.net/api/jlptgrammar/4/30/15",

]






for ulr in ulrs:
    print(ulr)

    # Make a get request to get the latest position of the international space station from the opennotify api.
    # response = requests.get("http://api.open-notify.org/iss-now.json")
    response = requests.get(ulr)

    # Print the status code of the response.
    print(response.status_code)
    # print(response.text)


    f = open("demofile.txt", "ab")
    # f.write(str(response.text))
    f.write(response.text.encode("UTF-8"))