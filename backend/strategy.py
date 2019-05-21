import requests
import numpy as np, numpy.random
import random

def get_stock_list_all(strategy_list,amount):
	print(strategy_list[0])
	stock_percent_list=[]
	basic_data={}
	if(len(strategy_list)==1):
		stock_percent_list.append(get_stock_list_one_strategy(strategy_list[0],amount))
		# random_ratio = np.mean(np.random.dirichlet(np.ones(5), 10), axis=0).tolist()
		# basic_data["percentage"] =random_ratio
		# stock_percent_list.append(basic_data)
	else:
		stock_percent_list.append(get_stock_list_two_strategies(strategy_list[0],amount))
		stock_percent_list.append(get_stock_list_two_strategies(strategy_list[1],amount))
		# random_ratio = np.mean(np.random.dirichlet(np.ones(4), 10), axis=0).tolist()
		# basic_data["percentage"] =random_ratio
		# stock_percent_list.append(basic_data)
	return stock_percent_list
	
def get_stock_list_one_strategy(strategy,amount):
    #define the stocks for each strategy
	stocks = stock_info[strategy]
	stock_list_multiple=[]
	random_stocks= random.sample(stocks,5)
	for stock in random_stocks:
		stock_list={}
		print(stock)
		response_data= requests.get('https://api.iextrading.com/1.0/stock/'+stock+'/quote')
		response_week = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+stock+'&outputsize=compact&apikey=6Z2XPX3WLFSGNNPI')
		response_data2=response_data.json()
		response_week2=response_week.json()
		print(response_data2['companyName'])
		stock_list["symbolName"]=response_data2['symbol']
		stock_list["companyName"]=response_data2['companyName']
		stock_list["latestPrice"]=response_data2['latestPrice']
		stock_list["changePercentage"] =response_data2['changePercent']
		stock_list["investmentAmount"]=str(int(amount)/5)
		# stock_list["weeklyData"]=response_week2["Time Series (Daily)"]
		stock_list["weeklyData"]=response_week2["Time Series (Daily)"]
		#random_ratio = np.mean(np.random.dirichlet(np.ones(2), 10), axis=0).tolist()
		#stock_list["percentage"] =random_ratio
		stock_list["strategy"]=strategy
		stock_list_multiple.append(stock_list)
	# the stocks_list for the selected strategies
	return stock_list_multiple

def get_stock_list_two_strategies(strategy,amount):
    #define the stocks for each strategy
	stocks = stock_info[strategy]
	stock_list_multiple=[]
	# basic_data={}
	random_stocks= random.sample(stocks,2)
	# basic_data["strategy"]=strategy
	# stock_list_multiple.append(basic_data)
	for stock in random_stocks:
		stock_list={}
		print(stock)
		response_data= requests.get('https://api.iextrading.com/1.0/stock/'+stock+'/quote')
		response_week = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+stock+'&outputsize=compact&apikey=6Z2XPX3WLFSGNNPI')
		response_data2=response_data.json()
		response_week2=response_week.json()
		print(response_data2['companyName'])
		stock_list["symbolName"]=response_data2['symbol']
		stock_list["companyName"]=response_data2['companyName']
		stock_list["latestPrice"]=response_data2['latestPrice']
		stock_list["changePercentage"] =response_data2['changePercent']
		stock_list["investmentAmount"]=str(int(amount)/4)
		# stock_list["weeklyData"]=response_week2["Time Series (Daily)"]
		stock_list["weeklyData"]=response_week2["Time Series (Daily)"]
		stock_list["strategy"]=strategy
		stock_list_multiple.append(stock_list)
	# the stocks_list for the selected strategies
	return stock_list_multiple	
	
stock_info={
	 "Ethical Investing":("AAPL","ADBE","NKE","JCI","GOOG"),
	  "Growth Investing":("ADBE","AVGO","NFLX","IMAX","SFM"),
	  "Index Investing": ("VTI","IXUS","ILTB","FDX","EXPE"),
	  "Quality Investing":("EME","TSN","ENS","CVG","IXUS"),
	  "Value Investing": ("FDC","TMUS","HCA","EXPE","FDX","CVS")  
}