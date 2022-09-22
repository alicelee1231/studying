import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usage } from '../usage/entities/usage.entity';
import { UsageService } from '../usage/usage.service';
import { UpdateController } from './update.controller';
import { UpdateService } from './update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usage])],
  controllers: [UpdateController],
  providers: [UpdateService, UsageService],
})
export class UpdateModule {}
