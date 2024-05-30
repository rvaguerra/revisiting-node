FROM node:18-alpine as base
WORKDIR /app
COPY . .
RUN npm install

FROM base as development
ENV NODE_PATH=./src

FROM base as production
ENV NODE_PATH=./dist
RUN npm run build
