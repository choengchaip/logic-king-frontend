#!/bin/sh

docker build \
  --build-arg APP_HOST=0.0.0.0 \
  --build-arg APP_PORT=8000 \
  -t chengchaip/logic-frontend:1.0.5 \
  -t chengchaip/logic-frontend:latest .

docker push chengchaip/logic-frontend:1.0.5
docker push chengchaip/logic-frontend:latest
