import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  pwd: string;

  @Column({ nullable: true })
  phone: string;
}
