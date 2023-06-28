FROM node:16 AS builder
# set working directory
# install app dependencies
RUN mkdir /app
WORKDIR /app
#copies package.json and package-lock.json to Docker environment
# COPY package-lock.json ./
COPY package.json .
COPY yarn.lock .
# Installs all node packages
# RUN npm ci 
RUN npm install yarn --global --force
RUN yarn install --immutable --immutable-cache --check-cache


# Copies everything over to Docker environment
COPY . .
RUN yarn install --immutable
# RUN npm run build
RUN yarn vite build
CMD ["yarn", "vite", "build"]

#Stage 2
#######################################
#pull the official nginx:1.19.0 base image
FROM nginx:latest
#copies React to the container directory
WORKDIR /app
RUN mkdir ./dist
ADD ./dist ./dist
# Set working directory to nginx resources directory
# WORKDIR /usr/share/nginx/html
#COPY ./nginx/nginx.conf ./nginx/etc/
#/etc/nginx/conf.d/default.conf
# Remove default nginx static resources
# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf
 
# host pc 의 default.conf 를 아래 경로에 복사
COPY ./nginx/default.conf /etc/nginx/conf.d
 
#RUN rm -rf ./usr/share/nginx/html/*
# Copies static resources from builder stage
#COPY --from=builder /app/dist /usr/share/nginx/html/
# Containers run nginx with global directives and daemon off
EXPOSE 3100
ENTRYPOINT ["nginx", "-g", "daemon off;"]