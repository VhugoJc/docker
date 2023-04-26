# install linux version with node installed
FROM node:19.2-alpine3.17 
# cd /app:
WORKDIR /app
# package file to /app
COPY package.json ./
# node modules [dependencies]:
RUN npm install
# app files to /app
COPY app.js ./
# run application
CMD [ "npm","start" ]