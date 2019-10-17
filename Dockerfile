FROM node

# Create app/work directory
WORKDIR /airbnbClone

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/helpers/package.json ./packages/helpers/

RUN npm i -g yarn
RUN yarn install --production

COPY ./packages/server/dist/ ./packages/server/dist
COPY ./packages/helpers/dist ./packages/helpers/dist
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./ormconfig.json .

WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 4000

CMD [ "node", "dist/index.js" ]