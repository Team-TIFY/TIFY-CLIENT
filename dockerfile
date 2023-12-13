# base image 설정(as build 로 완료된 파일을 밑에서 사용할 수 있다.)
FROM node:18.16.1-alpine as builder
# 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

COPY package.json .
RUN yarn set version berry

COPY yarn.lock .yarn .yarnrc.yml ./

COPY . .
RUN yarn install
RUN yarn build

# 컨테이너의 3000번 포트를 열어준다.
EXPOSE 3000

CMD ["yarn", "dev"]
