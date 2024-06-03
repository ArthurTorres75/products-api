// Libraries
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Module dependencies
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users, UsersSchema } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
