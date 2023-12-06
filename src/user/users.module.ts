import { Module } from '@nestjs/common';
import { UserController } from './persistence/user.controller';
import { UserService } from './application/user.service';
import { UserRepository } from './infrastructure/user.repository';
import { UserResolver } from './persistence/user.resolver';

@Module({
	controllers: [UserController],
	providers: [UserService,
		UserRepository,
		UserResolver]
})
export class UsersModule {
}
