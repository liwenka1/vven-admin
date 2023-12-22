import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { PrismaService } from 'src/services/prisma.service'
import { RedisService } from 'src/services/redis.service'

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, RedisService]
})
export class UserModule {}
