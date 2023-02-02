FROM node:18-alpine AS build
WORKDIR /app
RUN apk add git
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build
RUN find ./dist -type f | xargs gzip -k

FROM nginx:1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
