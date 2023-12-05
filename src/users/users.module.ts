import { Module } from '@nestjs/common';
import { UsersController } from './persistence/users.controller';
import { UsersService } from './application/users.service';
import { UserRepository } from './infrastructure/user.repository';
import { UserResolver } from './persistence/user.resolver';

@Module({
	controllers: [UsersController],
	providers: [UsersService,
		UserRepository,
		UserResolver]
})
export class UsersModule {
}
