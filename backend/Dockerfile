FROM node:alpine:latest

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]