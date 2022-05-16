import { Module } from "@nestjs/common";
import { MailboxModule } from "./mailbox/mailbox.module";
import { MessageModule } from "./message/message.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "dbuser",
      password: "dbuserpwd",
      database: "database_development",
      entities: [],
      synchronize: true,
    }),
    MailboxModule,
    MessageModule,
    RouterModule.register([
      {
        path: "mailbox",
        module: MailboxModule,
        children: [
          {
            path: "/:email/messages",
            module: MessageModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
