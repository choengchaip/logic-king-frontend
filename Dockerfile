FROM node:14.16.1-alpine

WORKDIR /app

ARG APP_HOST
ARG APP_PORT

ENV APP_HOST=0.0.0.0
ENV APP_PORT=8000

RUN apk add --no-cache git
COPY ./package*.json /app/
COPY ./yarn.lock /app
RUN yarn

COPY . /app

RUN yarn build
CMD yarn start
