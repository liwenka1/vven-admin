import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() params: any): Promise<void> {
    return this.userService.create(params)
  }
}
