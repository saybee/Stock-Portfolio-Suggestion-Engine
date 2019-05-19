import time
from flask import Flask, request, jsonify
from strategy import get_stock_list_all #, get_strategy_stock_info, get_historical_strategy_stock_value
from flask_cors import CORS ## To connect server with frontend
import json


app = Flask(__name__) 

CORS(app)


@app.route('/test/<name>') ## Another webpage 
def test(name):
    print ("HI") ## prints on console
    return ("Hello {}!".format(name)) ## prints on browser
	
@app.route('/getdata', methods=['POST'])
def getdata():
	content = request.json
	choices = content['strategy']
	amount = content['price']
	response_obj={}
	if len(choices)<=0 or len(choices)>2:
		return "Error"
	print(choices)
	stocklist = get_stock_list_all(choices)
	response_obj["response_object"]=stocklist
	print('1234')
	return jsonify(stocklist);
       
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
