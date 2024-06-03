import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Mongoose } from 'mongoose';
import { Roles } from '../interfaces/users.interface';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop(String)
  token: string;

  @Prop({ type: Mongoose.prototype.ObjectId, ref: Roles, default: Roles.GUEST })
  role: Roles;

  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
