import { Inject, Injectable } from '@nestjs/common'
import { CreateUserRequest } from './create-user-request.dto'
import { ClientProxy } from '@nestjs/microservices'
import { CreateUserEvent } from './create-user.event'
import { Observable } from 'rxjs'
import { SendEmailEvent } from './send-email.event'

@Injectable()
export class AppService {
  constructor (
    @Inject('MS-USER') private readonly userClient: ClientProxy,
    @Inject('MS-EMAIL') private readonly emailClient: ClientProxy
  ) {
  }

  createUser (createUserRequest: CreateUserRequest): void {
    this.userClient.emit('user_created', new CreateUserEvent(createUserRequest.email))
    this.emailClient.emit('sent_email', new SendEmailEvent(createUserRequest.email))
  }

  getUser (): Observable<string[]> {
    return this.userClient.send({ cmd: 'get_user' }, {})
  }
}
