import { Injectable } from '@nestjs/common';

@Injectable()
export class MailboxService {
  createMailbox(): string {
    return 'Hello World!';
  }
  deleteMailbox(): string {
    return 'delete';
  }
}
