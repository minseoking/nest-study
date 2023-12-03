# STEP 1
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# STEP 2
FROM node:20-alpine

# bash install
RUN apk add bash

# Set the timezone in docker
RUN apk --no-cache add tzdata && \
        cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
        echo "Asia/Seoul" > /etc/timezone

WORKDIR /app
ENV NODE_ENV prod
COPY --from=builder /app ./

COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

#CMD ["yarn","start:prod"]