import { Module } from '@nestjs/common';
import { MailboxModule } from './mailbox/mailbox.module';
import { MessageModule } from './message/message.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    MailboxModule,
    MessageModule,
    RouterModule.register([
      {
        path: 'mailbox',
        module: MailboxModule,
        children: [
          {
            path: '/:email/messages',
            module: MessageModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
