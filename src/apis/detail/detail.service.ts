import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usage } from '../usage/entities/usage.entity';
import { Detail } from './entities/detail.entity';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>, //
    @InjectRepository(Detail)
    private readonly detailRepository: Repository<Detail>,
  ) {}

  async findOne(id) {
    return await this.usageRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(data) {
    const result = await this.usageRepository.delete({ id: data.id });
    return result;
  }
}
