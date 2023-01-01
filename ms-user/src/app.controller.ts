import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { EventPattern, MessagePattern } from '@nestjs/microservices'
import { CreateUserEvent } from './create-user.event'

@Controller()
export class AppController {
  private readonly user: string[] = []

  constructor (private readonly appService: AppService) {
  }

  @Get()
  getHello (): string {
    return this.appService.getHello()
  }

  @EventPattern('user_created')
  handleUserCreated (data: CreateUserEvent): void {
    console.log(`handleUserCreated - ${data.email}`)
    this.user.push(data.email)
  }

  @MessagePattern({ cmd: 'get_user' })
  getUser (): string[] {
    return this.user
  }
}
