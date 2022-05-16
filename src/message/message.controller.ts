import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly appService: MessageService) {}

  @Get()
  getAll(@Param('email') email: string): string {
    return `This action returns a #${email}`;
  }

  @Get('/:id')
  getMessageById(@Param() params): string {
    return `This action returns a ${params.email}, with ${params.id}`;
  }

  @Post()
  createMessage(): string {
    return this.appService.createMailbox();
  }

  @Delete('/:id')
  deleteMessage(): string {
    return this.appService.deleteMailbox();
  }
}
