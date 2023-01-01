import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { CreateUserRequest } from './create-user-request.dto'
import { Observable } from 'rxjs'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {
  }

  @Get()
  getUsers (): Observable<string[]> {
    return this.appService.getUser()
  }

  @Post()
  createUser (@Body() createUserRequest: CreateUserRequest): void {
    return this.appService.createUser(createUserRequest)
  }
}
