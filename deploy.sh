#! /bin/bash
yarn build:server
docker build -t lesliedinh95/airbnb:latest .
docker push lesliedinh95/airbnb:latest
ssh root@157.245.195.69 "docker pull lesliedinh95/airbnb:latest && docker tag"