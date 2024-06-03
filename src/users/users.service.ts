import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async createUser(userDto: UserDto): Promise<Users> {
    const newUser = new this.userModel(userDto);
    return await newUser.save();
  }

  async getUsers() {
    return await this.userModel.find().exec();
  }

  async getUser(userId: string): Promise<Users> {
    return await this.userModel.findById(userId);
  }

  async deleteUser(userId: string): Promise<Users> {
    return await this.userModel.findByIdAndDelete(userId);
  }

  async updateUser(userId: string, userDto: UserDto): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(userId, userDto, {
      new: true,
    });
  }
}
