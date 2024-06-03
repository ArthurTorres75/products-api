import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Roles } from '../interfaces/users.interface';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop(String)
  token: string;

  @Prop(Roles)
  role: Roles;

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
