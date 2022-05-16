import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Mailbox } from "./mailbox.entity";
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Mailbox, (mailbox) => mailbox.id)
  @Column({
    unique: true,
  })
  id_mailbox: number;

  @Column()
  subject: string;

  @Column()
  body: string;

  @Column()
  sender: string;

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
