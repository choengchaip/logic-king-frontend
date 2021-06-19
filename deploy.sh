#!/bin/sh

docker build \
  --build-arg APP_HOST=${APP_HOST} \
  --build-arg APP_PORT=${APP_PORT} \
  -t logic-king-frontend:$TAG_TIMESTAMP .

docker push logic-king-frontend:lastest
