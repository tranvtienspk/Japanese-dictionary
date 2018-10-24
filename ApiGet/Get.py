#Python 2.7.6
#RestfulClient.py

import requests
import json

# Make a get request to get the latest position of the international space station from the opennotify api.
# response = requests.get("http://api.open-notify.org/iss-now.json")
response = requests.get("https://mazii.net/api/grammar/f2d618ceb0702f781ec83b7d4f01f2a7")

# Print the status code of the response.
print(response.status_code)
print(response.text)


f = open("demofile.txt", "ab")
# f.write(str(response.text))
f.write(response.text.encode("UTF-8"))