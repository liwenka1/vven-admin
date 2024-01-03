import { HttpException, HttpStatus } from '@nestjs/common'

export class testError extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST)
  }
}
