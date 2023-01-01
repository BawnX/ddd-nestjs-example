import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Transport } from '@nestjs/microservices'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 4003
    }
  })
  await app.startAllMicroservices()
  await app.listen(4002)
}

bootstrap()
