#!/bin/bash
cd /home/blog-web
npm install express
echo "Express installed"
echo "{ \"name\": \"express-server\", \"type\": \"module\", \"scripts\": { \"start\": \"node server.js\" } }" > package.json