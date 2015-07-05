.PHONY:	
	clean build git_config git_del git_push_master ssh_update vim_update java_update 

build:	
	npm install

clean:	
	rm -rf node_modules


start:	
	node server.js



git_config :
	git config user.email "vXXXXt@gmail.com"
	git config user.name "rooid"

git_del :
	git status | grep 'deleted' | cut -d ":" -f2 | xargs git rm

git_push_master :
	git push -u origin master

