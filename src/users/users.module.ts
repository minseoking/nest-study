import { Module, } from '@nestjs/common';
import { UsersController, } from './persistence/users.controller';
import { UsersService, } from './application/users.service';
import { UserRepository, } from './infrastructure/user.repository';

@Module({
	controllers: [UsersController,],
	providers: [UsersService, UserRepository,],
})
export class UsersModule {}
