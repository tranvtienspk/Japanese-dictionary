#Python 2.7.6
#RestfulClient.py

import requests
import json


ulrs = [
 "http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=1",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=2",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=3",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=4",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=5",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=6",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=7",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=8",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=9",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=10",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=11",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=12",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=13",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=14",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=15",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=16",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=17",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=18",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=19",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=20",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=21",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=22",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=23",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=24",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=25",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=26",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=27",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=28",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=29",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=30",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=31",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=32",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=33",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=34",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=35",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=36",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=37",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=38",
"http://www.thongtincongty.com/thanh-pho-ho-chi-minh/quan-12/phuong-tan-chanh-hiep/?page=39",

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