FROM node:18.18.2-alpine as builder

WORKDIR /app

USER root

# 构建项目
COPY ./ ./

# 安装pnpm
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm
# 安装依赖并
RUN pnpm config set registry https://registry.npmmirror.com
RUN pnpm install
RUN pnpm run build


FROM nginx:alpine as production
COPY  --from=builder /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 3002

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
