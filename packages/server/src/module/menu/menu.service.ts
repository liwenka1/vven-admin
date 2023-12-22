import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { CreateMenuDto } from './menu.dto'

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async getMenus() {
    return await this.prisma.menu.findMany()
  }

  async createMenu(dto: CreateMenuDto) {
    return await this.prisma.menu.create({ data: dto })
  }
}
