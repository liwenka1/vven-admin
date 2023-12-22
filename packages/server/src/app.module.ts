import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './module/user/user.module'
import { MenuModule } from './module/menu/menu.module'
import { PrismaService } from './services/prisma.service'
import { RedisService } from './services/redis.service'

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
  providers: [AppService, PrismaService, RedisService]
})
export class AppModule {}
