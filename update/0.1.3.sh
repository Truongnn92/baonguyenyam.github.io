#!/bin/bash
printf "Run Update v0.1.3 ...\n"
file="0.1.3.log"
if [ -f "$file" ]
then
	printf "\033[0;33m0.1.3 Updated\033[0m\n"
else
	cd ..
	npm update webpack webpack-dev-server webpack-stream
	cd update
	(
	   printf 'webpack\n'
	   printf 'webpack-dev-server\n'
	   printf 'webpack-stream\n'
	) > 0.1.3.log
	printf "-----------------------------"
    printf "\033[1;32mCongrats!\033[0m\n"
    printf "\033[1;32mv0.1.3 Update Finished\033[0m\n"
fi