import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsEmail } from "class-validator";
import { Message } from "./message.entity";

@Entity()
export class Mailbox {
  @OneToMany(() => Message, (message) => message.id_mailbox)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;
}
