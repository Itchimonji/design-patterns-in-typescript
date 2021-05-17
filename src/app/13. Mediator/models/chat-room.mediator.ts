import { Mediator } from './mediator.interface';
import { AbstractUser } from './user.model';

interface IHash {
  [key: number]: AbstractUser;
}

export class ChatRoom implements Mediator {
  private userMap: IHash = {};

  public getUserNameByID(id: number): string {
    return this.userMap[id].name;
  }

  public getUserByID(id: number): AbstractUser {
    return this.userMap[id];
  }

  public notify(message: string, toUserId: number, fromUserId: number): void {
    if (this.userMap[toUserId] != null) {
      this.userMap[toUserId].receive(message, fromUserId);
    }
  }

  public addUser(user: AbstractUser): void {
    this.userMap[user.id] = user;
  }
}
