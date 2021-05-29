FROM node:12.13.0-alpine AS builder

RUN apk --no-cache add python make g++ curl bash

COPY . .
RUN yarn install

RUN rm -rf node_modules && yarn install --production

FROM node:12.13.0-alpine
WORKDIR /code
COPY --from=builder node_modules ./node_modules
COPY --from=builder package.json .
COPY --from=builder yarn.lock .

EXPOSE 3000

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait

ENV NODE_ENV=production