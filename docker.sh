#!/bin/sh

docker run --name ngVod -d -p 80:80 -v$PWD/out:/usr/share/nginx/html/ngvod nginx