import { Controller, Get, Post, Delete } from '@nestjs/common';
import { MailboxService } from './mailbox.service';

@Controller()
export class MailboxController {
  constructor(private readonly appService: MailboxService) {}

  @Post()
  createMailbox(): string {
    return this.appService.createMailbox();
  }

  @Delete()
  deleteMailbox(): string {
    return this.appService.deleteMailbox();
  }
}
