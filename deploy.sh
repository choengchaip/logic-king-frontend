#!/bin/sh

docker build \
  --build-arg APP_HOST=0.0.0.0 \
  --build-arg APP_PORT=8000 \
  -t chengchaip/logic-frontend:1.0.3 \
  -t chengchaip/logic-frontend:latest .

docker push chengchaip/logic-frontend:1.0.3
docker push chengchaip/logic-frontend:latest
