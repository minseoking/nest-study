import {
	ForbiddenException, HttpStatus, Injectable
} from '@nestjs/common';
import { User } from '../persistence/users.model';
import { UserRepository } from '../infrastructure/user.repository';
import { UserEntity } from '../domain/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

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

    async getUserById(id: number): Promise<UserEntity> {
    	const found = await this.userRepository.getUserEntityById(id);
    	if (!found) {
    		console.log(found);
    		//throw new ExceptionHandler();
    	}

    	return found;
    }

    async createUser(createUserDto: CreateUserDto): Promise<any> {
    	const user = await this.userRepository.findOneBy({ userId: createUserDto.userId });
    	if (user) {
    		throw new ForbiddenException({
    			statusCode: HttpStatus.FORBIDDEN,
    			message: ['이미 등록된 사용자입니다.'],
    			error: 'Forbidden'
    		});
    	}
    	const { ...result } = await
    	this.userRepository.save(createUserDto);

    	return result;
    }
}
