FROM node:14

COPY package.json /app/
COPY src /app/
COPY .env /app

WORKDIR /app

RUN npm install -g nodemon
RUN npm install

CMD ["nodemon", "server.js"]