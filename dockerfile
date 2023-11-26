# react-dockerizing/Dockerfile

# base image 설정(as build 로 완료된 파일을 밑에서 사용할 수 있다.)
FROM node:18.16.1-alpine as builder
# 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

COPY package.json .
RUN yarn set version berry

COPY yarn.lock .yarn .yarnrc.yml ./

# RUN yarn install
COPY . .
RUN yarn install
RUN yarn build

# COPY .yarn ./.yarn
# COPY .pnp.cjs .yarnrc.yml package.json yarn.lock* ./
# RUN yarn install --immutable

# COPY . .

# RUN npm install yarn --global --force
# RUN yarn set version berry
# RUN yarn install --immutable --immutable-cache --check-cache

# RUN yarn set version berry
# RUN yarn build

RUN yarn build

# COPY .yarn ./.yarn
# COPY .pnp.cjs .yarnrc.yml package.json yarn.lock* ./
# RUN yarn install --immutable

# COPY . .

# RUN npm install yarn --global --force
# RUN yarn set version berry
# RUN yarn install --immutable --immutable-cache --check-cache

# RUN yarn set version berry
# RUN yarn build

# app dependencies
# 컨테이너 내부로 package.json 파일들을 복사


# RUN npm install yarn --global --force

# package.json 및 package-lock.json 파일에 명시된 의존성 패키지들을 설치
# RUN yarn install

# 호스트 머신의 현재 디렉토리 파일들을 컨테이너 내부로 전부 복사
# COPY . ./

# yarn build
# RUN npm i -D esbuild
# RUN yarn install

# prod environment
## TODO:nginx 관련된 거 다 뺴기~ 
# FROM nginx:stable-alpine

# 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
# FROM nginx:latest

# 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
# RUN rm /etc/nginx/conf.d/default.conf
# RUN rm -rf /etc/nginx/conf.d/*
# custom 설정파일을 컨테이너 내부로 복사한다.
# COPY nginx/default.conf /etc/nginx/conf.d

# 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
# COPY --from=build /app/dist /usr/share/nginx/html
# 컨테이너의 3000번 포트를 열어준다.
EXPOSE 3000

# nginx 서버를 실행하고 백그라운드로 동작하도록 한다.
# CMD ["nginx", "-g", "daemon off;"]
CMD ["yarn", "dev"]
