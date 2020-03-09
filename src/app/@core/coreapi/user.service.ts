import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {  User, LUsers } from '../model/user';

@Injectable()
export class UsersService  {

  users: User[] = [];
  
  constructor() { 
      this.users = LUsers;
    }

  get() {
    return this.users;
  }
}
