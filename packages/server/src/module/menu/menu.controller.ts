import { Body, Controller, Get, Post } from '@nestjs/common'
import { MenuService } from './menu.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateMenuDto } from './menu.dto'

@ApiTags('菜单权限模块')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({
    summary: '菜单列表'
  })
  @Get('search')
  search() {
    return this.menuService.getMenus()
  }

  @ApiOperation({
    summary: '创建菜单'
  })
  @Post('create')
  create(@Body() dto: CreateMenuDto) {
    return this.menuService.createMenu(dto)
  }
}