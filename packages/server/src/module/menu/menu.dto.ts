import { ApiProperty } from '@nestjs/swagger'

/*
 * 新建菜单
 */
export class CreateMenuDto {
  @ApiProperty({ description: '名称' })
  name: string
  @ApiProperty({ description: '父级id' })
  parentId: number
  @ApiProperty({ description: '路由路径' })
  path: string
  @ApiProperty({ description: '显示与否' })
  show?: boolean
}
