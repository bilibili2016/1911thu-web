#!/bin/sh
#set username zhangshuai@1911thu.com
#set password zhang36790
#set timeout -1 
git add .
git commit -m "update"
git pull origin dev
send "$username\r"
npm run build
