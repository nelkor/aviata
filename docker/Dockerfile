FROM node:16.16.0-alpine3.16 AS build
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.23.0-alpine
COPY --from=build /app/dist /app
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
