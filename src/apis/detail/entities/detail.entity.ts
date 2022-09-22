import { Usage } from 'src/apis/usage/entities/usage.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @OneToOne(() => Usage)
  @JoinColumn()
  usage: Usage;
}
