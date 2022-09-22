import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { UsageService } from './usage.service';

@Controller()
export class UsageController {
  constructor(private readonly usageService: UsageService) {}

  @Get('/usage')
  @Render('usage')
  async usage(
    @Query() query: { page: string; limit: string; maxPage: string }, //
  ) {
    const result = await this.usageService.find(query.page, query.limit);
    return {
      data: result,
      currentPage: query.page,
    };
  }

  @Post('/usage')
  async click(@Body() data) {
    return await this.usageService.create(data);
  }
}
