import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { validate } from './config/env.validation';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `${process.cwd()}/src/config/env/.env.${process.env.NODE_ENV}`,
			validate
		}),
		TypeOrmModule.forRootAsync(typeORMConfig),
		UsersModule]
})
export class AppModule {
}
