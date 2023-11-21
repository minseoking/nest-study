import { Controller, Get, } from '@nestjs/common';
import { UsersService, } from '../application/users.service';
import { User, } from './users.model';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {
	}

    @Get()
	getAllUsers() : User[] {

		return this.usersService.getAllUsers();
	}
}
