import { Detail } from 'src/apis/detail/entities/detail.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Usage {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ default: true })
  counting: number;

  @Column({ default: true })
  title: string;

  @Column({ default: true })
  userId: string;

  @Column({ default: true })
  area: string;

  @Column({ default: true })
  content: string;

  @Column({ default: true })
  createdAt: string;

  @Column({ default: true })
  sort: string;

  @Column({ default: true })
  period: string;

  @Column({ default: true })
  goal: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => Detail)
  @JoinColumn()
  detail: Detail;
}
