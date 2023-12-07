import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return `.env.${process.env.NODE_ENV}`
  }
}
