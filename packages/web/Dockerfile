FROM node:18.18.2-alpine as builder

WORKDIR /app

USER root

# 构建项目
COPY ./ ./

# 安装依赖并打包
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm run build


FROM nginx:alpine as production
COPY  --from=builder /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 3002

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
