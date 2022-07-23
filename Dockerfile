FROM node:18-alpine

RUN mkdir /app
WORKDIR /app
COPY ./webpack /app
RUN yarn
RUN npm run build
COPY ./webpack/src/img /app/dist/img
COPY ./webpack/src/favicon.ico /app/dist/favicon.ico

RUN mkdir /server
WORKDIR /server
COPY ./server /server
RUN yarn

RUN yarn global add pm2
COPY ./cat1-snapshot.csv /server/cat1-snapshot.csv

ENV NODE_ENV=production

CMD [ "pm2-runtime", "npm", "run", "--", "start"]