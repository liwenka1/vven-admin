import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('角色权限模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() params: any): Promise<void> {
    return this.userService.create(params)
  }

  @Post('get')
  get(@Body() params: { key: string }): Promise<any> {
    return this.userService.redisGet(params.key)
  }

  @Post('set')
  set(@Body() params: { key: string; value: string }): Promise<any> {
    return this.userService.redisSet(params.key, params.value)
  }
}
