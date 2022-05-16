import { Module } from '@nestjs/common';
import { MailboxController } from './mailbox.controller';
import { MailboxService } from './mailbox.service';

@Module({
  imports: [],
  controllers: [MailboxController],
  providers: [MailboxService],
})
export class MailboxModule {}
