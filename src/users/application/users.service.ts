import { Injectable, } from '@nestjs/common';
import { User, } from '../persistence/users.model';
import { UserRepository, } from '../infrastructure/user.repository';
import { UserEntity, } from '../domain/user.entity';
import { InjectRepository, } from '@nestjs/typeorm';
import { ExceptionHandler, } from '@nestjs/core/errors/exception-handler';

@Injectable()
export class UsersService {
	constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
	) {
	}
    private users: User[] = [];

    getAllUsers(): User[] {
    	return this.users;
    }

    async getUserById(id : number) : Promise<UserEntity> {
    	const found = await this.userRepository.getUserEntityById(id);
    	if(!found) {
    		console.log(found);
    		//throw new ExceptionHandler();
    	}

    	return found;
    }

    createUser(user: User) {
    	this.users.push(user);
    }
}
