import { Column } from 'typeorm';

export class UpdateUsageInput {
  @Column()
  title: string;

  @Column()
  area: string;

  @Column()
  content: string;

  @Column()
  sort: string;

  @Column()
  period: string;

  @Column()
  goal: string;
}
