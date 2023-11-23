import {
	Controller, Get, Param, 
} from '@nestjs/common';
import { UsersService, } from '../application/users.service';
import { User, } from './users.model';
import { UserEntity, } from '../domain/user.entity';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {
	}

    @Get()
	getAllUsers() : User[] {
		return this.usersService.getAllUsers();
	}

	@Get('/:id')
    getByUser(@Param('id') id:number) : Promise<UserEntity> {
    	return this.usersService.getUserById(id);
    }
}
