FROM node:8

WORKDIR '/app'

EXPOSE 8089

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["node","server.js"]

