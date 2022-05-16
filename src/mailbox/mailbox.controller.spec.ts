import { Test, TestingModule } from '@nestjs/testing';
import { MailboxController } from './mailbox.controller';
import { MailboxService } from './mailbox.service';

describe('MailboxController', () => {
  let emailController: MailboxController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailboxController],
      providers: [MailboxService],
    }).compile();

    emailController = app.get<MailboxController>(MailboxController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(emailController.createMailbox()).toBe('Hello World!');
    });
  });
});
