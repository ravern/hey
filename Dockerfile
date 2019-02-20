FROM node:11-alpine

ENV PORT=80

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD [ "npm", "run", "prod:start"]
