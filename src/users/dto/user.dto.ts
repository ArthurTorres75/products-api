import { Roles } from '../interfaces/users.interface';

export class UserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly token: string;
  readonly role: Roles;
}
