#!/bin/sh

docker build \
  --build-args APP_HOST=${APP_HOST} \
  --build-args APP_PORT=${APP_PORT} \
  -t logic-king-frontend:lastest .

docker push logic-king-frontend:lastest
