#!/bin/sh

TAG_COMMIT=$1
TAG_LATEST=$2

docker build \
  --build-arg APP_HOST=0.0.0.0 \
  --build-arg APP_PORT=8000 \
  -t "$TAG_COMMIT" \
  -t "$TAG_LATEST" .

docker push "$TAG_COMMIT"
docker push "$TAG_LATEST"
