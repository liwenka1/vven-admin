import { NestFactory } from '@nestjs/core'
import { generateDocmment } from './doc'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 文档支持
  generateDocmment(app)

  await app.listen(3000)
}
bootstrap()
