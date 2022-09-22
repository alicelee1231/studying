import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Req,
  Res,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

interface IOAuthUser {
  user: Pick<User, 'email' | 'nickname' | 'pwd'>;
}

@Controller()
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly userController: UserController,
  ) {}

  @UseGuards()
  @Post('/login')
  async login(
    @Body() data,
    @Req() req: Request,
    @Res() res: Response, //
  ) {
    const userId = data.data[0];
    const pwd = data.data[1];
    const user = await this.userService.findNickname({ data: userId });
    if (!user) {
      throw new UnprocessableEntityException(
        console.log('닉네임이 존재하지 않습니다.'),
      );
    }
    console.log(DataSource, user.pwd);
    const isAuth = await bcrypt.compare(pwd, user.pwd);

    if (!isAuth)
      throw new UnprocessableEntityException(
        console.log('비밀번호가 일치하지 않습니다.'),
      );
    await this.authService.setRefreshToken({
      user,
      res,
      req,
    });
    const accessToken = this.authService.getAccessToken({ user });
    res.send(accessToken);
  }

  @Get('/logout')
  @Render('logout')
  async logout(
    @Body() data, //
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //   // let token = req.headers.cookie;
    //   // console.log(req, '==============');
    //   // let token;
    //   // if (token) token = token.split('=')[1];
    //   // console.log(token, '11111111111111');
    return await this.authService.logout({ req, data });
    //   // try {
    //   //   const myToken = jwt.verify(Token, refreshToken);

    //   //   return true;
    //   // } catch {
    //   //   throw new UnauthorizedException();
  }

  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    //
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    return this.authService.createSocialUser({ req, res });
  }

  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakaotalk'))
  async loginKakao(
    //
    @Req() req: Request & IOAuthUser,
    @Res() res: Response, //
  ) {
    return this.authService.createSocialUser({ req, res });
  }

  @Get('/login/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    //
    @Req() req: Request & IOAuthUser,
    @Res() res: Response, //
  ) {
    return this.authService.createSocialUser({ req, res });
  }
}
