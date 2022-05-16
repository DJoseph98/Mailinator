import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Message } from "./message.entity";

@Entity()
export class Mailbox {
  @OneToMany(() => Message, (message) => message.id_mailbox)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({
    type: "datetime",
    default: () => "NOW()",
  })
  created_at: Date;

  @Column({
    type: "datetime",
    default: () => "NOW()",
  })
  updated_at: Date;
}
