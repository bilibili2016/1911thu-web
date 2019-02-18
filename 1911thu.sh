#!/bin/sh
set username zhaoliangliang@1911thu.com
set password 15831929073as
set timeout -1 
git add .
git commit -m "update"
git pull origin dev
send "$username\r"
npm run build
