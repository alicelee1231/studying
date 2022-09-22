import { Body, Controller, Get, Param, Put, Render, Req } from '@nestjs/common';
import { UpdateUsageInput } from './dto/update.usage.input';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
  constructor(
    private readonly updateService: UpdateService, //
  ) {}

  @Get('/:id')
  @Render('update')
  async updatePageOpen(
    @Param('id') id: string, //
  ) {
    const result = await this.updateService.findOne(id);
    return { data: result };
  }

  @Put('/')
  async update(@Body() updateUsageInput: UpdateUsageInput, @Req() req) {
    return await this.updateService.update({ req, updateUsageInput });
  }
}
