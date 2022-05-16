import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { IsEmail } from "class-validator";
import { Mailbox } from "./mailbox.entity";
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Mailbox, (mailbox) => mailbox.id)
  @Column()
  id_mailbox: number;
}
