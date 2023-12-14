### 这里是后端

### 技术栈

nestjs + mysql + prisma + redis + jwt + swagger

## 环境配置

### MySQL

```
# docker 中下载 mysql
docker pull mysql:latest

#启动
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql

#进入容器
docker exec -it mysql bash

#登录mysql
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

#添加远程登录用户
CREATE USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
```

### Redis

```
# docker 中下载 redis
docker pull redis:latest

#启动
docker run --name redis -p 6379:6379 -e requirepass=123456 -d redis

#进入容器
docker exec -it redis bash

#设置密码
# masterauth <master-password>
requirepass 123456
```

### prisma

```
npx prisma generate
npx prisma db push
```
