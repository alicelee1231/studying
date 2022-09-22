import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usage } from './entities/usage.entity';

@Injectable()
export class UsageService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,
  ) {}

  async find(page: string, limit: string) {
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const count = await this.usageRepository.count();
    const maxPage = Math.ceil(count / parsedLimit);

    const result = await this.usageRepository.find({
      order: {
        id: 'desc',
      },
      skip: (parsedPage - 1) * parsedLimit,
      take: parsedLimit,
    });

    // const count = await this.usageRepository.count();

    return result;
  }

  async findOne(id) {
    return await this.usageRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(data) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    await this.usageRepository.save({
      counting: data.counting,
      title: data.title,
      area: data.area,
      userId: data.userId,
      content: data.content,
      createdAt: currentDate,
      sort: data.sort,
      period: data.period,
      goal: data.goal,
    });
  }
}
