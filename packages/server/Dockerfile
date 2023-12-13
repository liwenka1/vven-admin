FROM node:18.18.2-alpine as builder

WORKDIR /app

# 构建项目
COPY . .

# 安装依赖并打包
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm" ,"run" ,"start:prod"]
