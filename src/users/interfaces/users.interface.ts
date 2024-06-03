export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  role: Roles;
}
