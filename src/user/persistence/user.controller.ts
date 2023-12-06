import {
	Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe
} from '@nestjs/common';
import { UserService } from '../application/user.service';
import { UserEntity } from '../domain/user.entity';
import { CreateUserDto } from '../application/dto/create-user.dto';

// @UseGuards(RolesGuard)
@Controller('users')
export class UserController {
	constructor(private usersService: UserService) {
	}

    @Get()
	getAllUsers(): Promise<UserEntity[]>  {
		return this.usersService.getAllUsers();
	}

    @Get('/:id')
    getByUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    	return this.usersService.getUserById(id);
    }

    @Post()
	@UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto) {
    	return this.usersService.createUser(createUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
    	this.usersService.deleteUser(id);
    }
}
