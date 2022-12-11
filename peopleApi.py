from flask import Flask, jsonify, request
import requests
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/ret', methods=['GET'])
def ReturnJSON():
    id = request.args.get('id')
    cookies = {
        'csrftoken':
        '008zLFeqD6hn1uVwMWU5R7D08wpQpL1kS6pjdR8CI9FIkyafLRCDMkibTYT0DVeN',
        'gr_user_id': '6340500b-656f-48ab-849f-f91ebe8e4ffc',
        '87b5a3c3f1a55520_gr_session_id':
        '8212ca8a-d573-4829-8fe0-268a3fd8ccf9',
        '87b5a3c3f1a55520_gr_session_id_8212ca8a-d573-4829-8fe0-268a3fd8ccf9':
        'true',
        '_gid': 'GA1.2.1034509744.1670739497',
        '_gat': '1',
        '_ga_CDRWKZTDEX': 'GS1.1.1670739498.1.0.1670739498.0.0.0',
        '_ga': 'GA1.1.938791714.1670739497',
    }

    headers = {
        'authority':
        'leetcode.com',
        'accept':
        '*/*',
        'accept-language':
        'en-US,en;q=0.9',
        'authorization':
        '',
        'content-type':
        'application/json',
        # 'cookie': 'csrftoken=008zLFeqD6hn1uVwMWU5R7D08wpQpL1kS6pjdR8CI9FIkyafLRCDMkibTYT0DVeN; gr_user_id=6340500b-656f-48ab-849f-f91ebe8e4ffc; 87b5a3c3f1a55520_gr_session_id=8212ca8a-d573-4829-8fe0-268a3fd8ccf9; 87b5a3c3f1a55520_gr_session_id_8212ca8a-d573-4829-8fe0-268a3fd8ccf9=true; _gid=GA1.2.1034509744.1670739497; _gat=1; _ga_CDRWKZTDEX=GS1.1.1670739498.1.0.1670739498.0.0.0; _ga=GA1.1.938791714.1670739497',
        'origin':
        'https://leetcode.com',
        'referer':
        'https://leetcode.com/godofcode99/',
        'sec-ch-ua':
        '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        'sec-ch-ua-mobile':
        '?1',
        'sec-ch-ua-platform':
        '"Android"',
        'sec-fetch-dest':
        'empty',
        'sec-fetch-mode':
        'cors',
        'sec-fetch-site':
        'same-origin',
        'user-agent':
        'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36',
        'x-csrftoken':
        '008zLFeqD6hn1uVwMWU5R7D08wpQpL1kS6pjdR8CI9FIkyafLRCDMkibTYT0DVeN',
    }

    json_data = {
        'query':
        '\n    query recentAcSubmissions($username: String!, $limit: Int!) {\n  recentAcSubmissionList(username: $username, limit: $limit) {\n    id\n    title\n    titleSlug\n    timestamp\n  }\n}\n    ',
        'variables': {
            'username': id,
            'limit': 15,
        },
    }

    response = requests.post('https://leetcode.com/graphql/',
                             cookies=cookies,
                             headers=headers,
                             json=json_data).json()

    data = {
        "name": id,
        "Subject": response,
    }
    finalResp = jsonify(data)
    # finalResp.headers.add("Access-Control-Allow-Origin", "*")
    # finalResp.headers['Access-Control-Allow-Origin'] = '*'

    # print(request.args.get('id'))
    return finalResp


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
