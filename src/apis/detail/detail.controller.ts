import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { DetailService } from './detail.service';

@Controller('detail')
export class DetailController {
  constructor(
    private readonly detailService: DetailService, //
  ) {}

  @Get('/:id')
  @Render('detail')
  async detail(@Param('id') id: string) {
    console.log(id, '-----------------');
    const result = await this.detailService.findOne(id);
    return { data: result };
  }

  @Delete('/')
  async delete(
    @Body() data, //
  ) {
    return await this.detailService.delete(data);
  }
}
