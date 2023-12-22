import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { RedisService } from 'src/services/redis.service'

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService
  ) {}

  async create(params) {
    await this.prisma.user.create({ data: params })
  }

  async redisGet(key: string) {
    return await this.redis.getValue(key)
  }

  async redisSet(key: string, value: string) {
    return await this.redis.setValue(key, value)
  }
}
