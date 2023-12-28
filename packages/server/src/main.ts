import { NestFactory } from '@nestjs/core'
import { generateDocmment } from './doc'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const { SERVER_PORT } = process.env
  // 文档支持
  generateDocmment(app)

  await app.listen(SERVER_PORT)
}
bootstrap()
