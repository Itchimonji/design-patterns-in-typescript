import { AbstractUser } from './user.model';

export interface Mediator {
  notify(message: string, toUserId: number, fromUserId: number): void;
  addUser(user: AbstractUser): void;
  getUserNameByID(id: number): string;
  getUserByID(id: number): AbstractUser;
}
