FROM node:14.18-alpine3.14 AS build
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
ARG configuration=production
RUN npm run build -- --outputPath=./dist --configuration $configuration

FROM nginx:1.21-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
