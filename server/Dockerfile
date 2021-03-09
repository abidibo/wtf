FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm i --silent

COPY . .

EXPOSE 3000
