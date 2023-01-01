import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Observable } from 'rxjs'
import { AppService } from './app.service'

@WebSocketGateway(4006, {
  namespace: 'orquest'
})
export default class EventWebsocket implements OnGatewayInit {
  constructor (private readonly appService: AppService) {
  }

  afterInit (server: any): any {
    console.log('Websocket Init')
  }

  @SubscribeMessage('get_users')
  handleEvent (): Observable<string[]> {
    return this.appService.getUser()
  }
}
