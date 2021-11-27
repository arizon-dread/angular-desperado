FROM alpine:3.15 AS build
RUN apk add --update npm
COPY . /app/
WORKDIR /app
RUN npm install -g @angular/cli && ng build

FROM nginx:1.21-alpine
COPY dist/angular-desperado/* /usr/share/nginx/html/
