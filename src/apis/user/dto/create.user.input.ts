import { Column } from 'typeorm';

export class CreateUserInput {
  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column()
  pwd: string;

  @Column()
  phone: string;
}
