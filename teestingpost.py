# import requests


# curl -L -d '' https://script.google.com/macros/echo?user_content_key=7b8A1QVRrnT635Is_wZULy9ClProYdhLLUA8fi672yYOr9qIBQSThsJWginYBkcHdMedBUtIBupiX0fbvL1g4pJtbE5t9wx7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP_lsW1LuuCEn3u0RNrUau41qdvYAzNChW61EbA998uP155IytRkNospDWZq0Uj8HqCHpO33sff4oBRThI1Ah7U4YgGwDBqHsA&lib=ME_SKLSICH7JewNit6gm4_pl9ogoAk9d_/exec

# curl -H 'Content-Type: application/json' -d {"ram":"boy"} -L https://script.google.com/macros/s/AKfycbwaaFN9txMrVSXejVpuxhDSsbo-CnGbv67BatunIISPyTSbJzNfXhsg8DtWU0RzySbF/exec
import requests
import json
import time
import datetime
headers = {
    'Content-Type': 'application/json',
}

data = {
    "date": datetime.datetime.now().strftime("%d-%m-%Y"),
    "sender": "ram",
    "message": "hello"
    }

res= json.dumps(data)
print(res)

response = requests.post(
    'https://script.google.com/macros/s/AKfycbwaaFN9txMrVSXejVpuxhDSsbo-CnGbv67BatunIISPyTSbJzNfXhsg8DtWU0RzySbF/exec',
    headers=headers,
    data=res,
)
res= response.json()
val= json.loads(res['chData']['postData']['contents'])
print(val['date'])
# print(res['chData']['postData']['contents'])