FROM node:18-alpine as base
WORKDIR /app
COPY . .
RUN npm install

FROM base as development

FROM base as production
RUN npm run build
