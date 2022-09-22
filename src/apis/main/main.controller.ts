import { Controller, Get, Render, Req } from '@nestjs/common';
import { MainService } from './main.service';
import { Request, Response } from 'express';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get('/main')
  @Render('main')
  async board() {}

  @Get('/login')
  @Render('login')
  async login(@Req() req: Request) {}
}
//jwt로 확인하는거
//'Refreshtoken'이 앞부분지우고 뒷부분만 들어오기
