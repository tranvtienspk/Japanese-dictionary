#Python 2.7.6
#RestfulClient.py

import requests
import json


ulrs = [
 "http://192.168.2.15:8083/setCountDown?300?1",
"http://192.168.2.15:8083/setCountDown?600?1",
"http://192.168.2.15:8083/setCountDown?900?1",
"http://192.168.2.15:8083/setCountDown?1200?1",
"http://192.168.2.15:8083/setCountDown?1500?1",
"http://192.168.2.15:8083/setCountDown?1800?1",
"http://192.168.2.15:8083/setCountDown?2100?1",
"http://192.168.2.15:8083/setCountDown?2400?1",
"http://192.168.2.15:8083/setCountDown?2700?1",
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