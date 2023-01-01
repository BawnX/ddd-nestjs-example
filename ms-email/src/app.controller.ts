import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { EventPattern } from '@nestjs/microservices'
import { SendEmailEvent } from './send-email.event'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {
  }

  // Pueblo
  @Get('sent_email')
  getSentEmail (): string {
    return this.appService.getHello()
  }

  // TEO
  @EventPattern('sent_email')
  eventSentEmail (data: SendEmailEvent): void {
    console.log(`Email Sent to - ${data.email}`)
  }
}
