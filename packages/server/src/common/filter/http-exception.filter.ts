import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    // 用于接收主动发错的错误信息
    const { message, code } = exception.getResponse() as any

    response.status(status).json({
      code: code || status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message
    })
  }
}
