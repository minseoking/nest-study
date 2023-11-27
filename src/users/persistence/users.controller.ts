import {
	Body,
	Controller, Get, Param, Post,
} from '@nestjs/common';
import { UsersService, } from '../application/users.service';
import { User, } from './users.model';
import { UserEntity, } from '../domain/user.entity';
import { CreateUserDto, } from '../application/dto/create-user.dto';

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

	@Post()
	createUser(@Body() createUserDto : CreateUserDto) {
		return this.usersService.createUser(createUserDto);
	}
}
