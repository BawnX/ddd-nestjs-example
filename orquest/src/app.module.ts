import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientsModule, Transport } from '@nestjs/microservices'
import EventWebsocket from './event-websocket'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MS-USER',
        transport: Transport.TCP,
        options: {
          port: 4001
        }
      },
      {
        name: 'MS-EMAIL',
        transport: Transport.TCP,
        options: {
          port: 4003
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, EventWebsocket]
})
export class AppModule {
}
