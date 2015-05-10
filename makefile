.PHONY:	
	clean build

build:	
	npm install

clean:	
	rm -rf node_modules


start:	
	node server.js


