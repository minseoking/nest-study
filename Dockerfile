# STEP 1
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# STEP 2
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV prod
COPY --from=builder /app ./
CMD ["yarn","start:prod"]