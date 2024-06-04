import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
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

  @Get('/:userId')
  async getUser(@Res() res: Response, @Param('userId') userId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) throw new NotFoundException('User not found');
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete(':userId')
  async deleteUSer(@Res() res: Response, @Param('userId') userId: string) {
    const deletedUser = await this.userService.deleteUser(userId);
    if (!deletedUser) throw new NotFoundException('User not found');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User deleted successfully', deletedUser });
  }

  @Put('/update/:userId')
  async updateUser(
    @Res() res: Response,
    @Param('userId') userId: string,
    @Body() userDto: UserDto,
  ) {
    const updatedUser = await this.userService.updateUser(userId, userDto);
    if (!updatedUser) throw new NotFoundException('User not found');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'user updated successfully', updatedUser });
  }
}
