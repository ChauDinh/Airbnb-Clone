#! /bin/bash
yarn build:server
docker build -t lesliedinh95/abb:latest .
docker push lesliedinh95/abb:latest
ssh root@167.99.75.93 "docker pull lesliedinh95/abb:latest && docker tag lesliedinh95/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"
