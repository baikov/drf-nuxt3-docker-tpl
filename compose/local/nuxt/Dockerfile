# Build
FROM node:18-alpine

WORKDIR /nuxt

COPY ./frontend/package*.json ./
# COPY ./frontend/yarn.lock ./

RUN yarn install --prefer-offline --non-interactive --production=false

COPY ./frontend .

ENV CHOKIDAR_USEPOLLING=true
# ENV PATH ./node_modules/.bin/:$PATH
