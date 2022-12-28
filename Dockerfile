# Install dependencies only when needed


# NGINX
FROM node:14-alpine as builder

# copy the package.json to install dependencies
COPY package.json ./

# Install the dependencies and make the folder
RUN yarn install --ignore-engines --production && mkdir /abraa && mv ./node_modules ./abraa
# RUN  mkdir /abraa && mv ./node_modules ./abraa

WORKDIR /abraa

COPY . .

# Build the project and copy the files
RUN yarn next build
RUN yarn next export

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /abraa/out /usr/share/nginx/html

EXPOSE 3000 3001

ENTRYPOINT ["nginx", "-g", "daemon off;"]