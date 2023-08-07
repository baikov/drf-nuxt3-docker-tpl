# Build
FROM node:20-alpine as builder

WORKDIR /nuxt

COPY ./frontend/package*.json ./
COPY ./frontend/yarn.lock ./

RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production=false

COPY ./frontend .

RUN yarn build

# Run
FROM node:20-alpine as prod

ENV NODE_ENV production
WORKDIR /nuxt

COPY --from=builder /nuxt/package.json ./package.json
COPY --from=builder /nuxt/yarn.lock ./yarn.lock

COPY --from=builder /nuxt/.output ./.output
