#!/bin/bash
cd /root/blog-web
npm install express
echo "Express installed"
echo "{ \"name\": \"express-server\", \"type\": \"module\", \"scripts\": { \"start\": \"node express.js\" } }" > package.json
npm run start