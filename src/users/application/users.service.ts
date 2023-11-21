import { Injectable, } from '@nestjs/common';
import { User, } from '../persistence/users.model';

@Injectable()
export class UsersService {

    private users: User[] = [];

    getAllUsers(): User[] {
    	return this.users;
    }

    createUser(user: User) {
    	this.users.push(user);
    }
}
