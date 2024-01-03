import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './module/user/user.module'
import { MenuModule } from './module/menu/menu.module'
import { PrismaService } from './services/prisma.service'
import { RedisService } from './services/redis.service'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import { HttpExceptionFilter } from './filter/http-exception.filter'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env']
    }),
    UserModule,
    MenuModule
  ],
  controllers: [AppController],
  providers: [
    {
      // 全局拦截器
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    },
    {
      // 异常过滤器
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
    AppService,
    PrismaService,
    RedisService
  ]
})
export class AppModule {}
