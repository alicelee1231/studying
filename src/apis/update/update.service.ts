import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usage } from '../usage/entities/usage.entity';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Usage)
    private readonly updateRepository: Repository<Usage>,
  ) {}

  async findOne(id) {
    return await this.updateRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update({ req, updateUsageInput }) {
    console.log('-------------------------');
    const findUpdate = await this.updateRepository.findOne({
      where: { title: req.body.title },
    });
    console.log(findUpdate);
    const result = await this.updateRepository.update(
      {
        id: findUpdate.id,
      },
      {
        ...updateUsageInput,
      },
    );
    console.log(result);
    return result;
  }
}
