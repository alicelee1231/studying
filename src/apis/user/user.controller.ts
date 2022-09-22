import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateUserInput } from './dto/create.user.input';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/signUp')
  @Render('signUp')
  async loginUser() {}

  @Post('/signUp')
  async createUser(
    @Body() createUserInput: CreateUserInput, //
  ) {
    const { pwd, ...userInfo } = createUserInput;
    const hashedPwd = await bcrypt.hash(pwd, 8);
    return this.userService.create({ pwd: hashedPwd, userInfo });
  }
}
