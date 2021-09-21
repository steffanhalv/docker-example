FROM node:14

ENV DEMO "ENV"

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

ENV PORT 3000
EXPOSE $PORT
CMD [ "node", "server.js" ]
