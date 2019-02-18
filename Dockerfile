# 本 Dockerfile 是为生产环境准备的开发中请勿使用，因为本地文件修改不会同步到容器中
FROM node:8.9.4

RUN mkdir -p /app
WORKDIR /app
COPY . /app

#RUN npm config set registry https://registry.npm.taobao.org
RUN npm install

EXPOSE 8080

CMD ["bash", "start.sh"]
