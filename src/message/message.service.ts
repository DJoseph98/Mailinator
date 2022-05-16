import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  createMailbox(): string {
    return 'Hello World!';
  }
  deleteMailbox(): string {
    return 'delete';
  }
}
