import platform
import os,time,sys
import urllib,urllib2,cookielib,socket

URL = "http://star2.gz.1251001828.clb.myqcloud.com:8282/star/vv_world_rank_1234.html"
logf = open('C:\Users\Administrator\Desktop\StarServerTools\WORLDRANK\worldrank.log','a+')
def execute(url):
	try:
		ret = urllib2.urlopen(url, timeout=5).read()
		print >>logf,("[%s]:[success]:%s"%(time.strftime("%Y.%m.%d %H:%M:%S"),url))
	except Exception, e:
		print >>logf,("[%s]:[error]:%s"%(time.strftime("%Y.%m.%d %H:%M:%S"),url))

def restartServer():
	pass
	#os.system(COMMAND)

if __name__ == '__main__':
	method = sys.argv[1]
	if method=="send":
		execute(URL+"?method="+method)
	elif method == "start":
		execute(URL+"?method="+method+"&time="+sys.argv[2].replace('m', '%20'))
	elif method == "close":
		execute(URL+"?method="+method+"&time="+sys.argv[2].replace('m', '%20'))
