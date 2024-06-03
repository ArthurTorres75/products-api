import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async createUser(@Res() res: Response, @Body() userDto: UserDto) {
    const newUser = await this.userService.createUser(userDto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User created successfully', newUser });
  }

  @Get('/')
  async getUsers(@Res() res: Response) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }
}
