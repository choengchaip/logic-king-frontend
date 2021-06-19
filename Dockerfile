FROM node:16.3.0-alpine3.12

WORKDIR /app

ARG APP_HOST
ARG APP_PORT

ENV APP_HOST=0.0.0.0
ENV APP_PORT=${APP_PORT}

RUN apk add --no-cache git

COPY ./package*.json /app/
COPY ./yarn.lock /app

RUN yarn
RUN yarn generate
RUN yarn start
