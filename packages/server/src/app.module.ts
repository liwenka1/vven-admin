import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './module/user/user.module'
import { MenuModule } from './module/menu/menu.module'
import { PrismaService } from './services/prisma.service'
import { RedisService } from './services/redis.service'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'

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
      //全局拦截器
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    },
    AppService,
    PrismaService,
    RedisService
  ]
})
export class AppModule {}
