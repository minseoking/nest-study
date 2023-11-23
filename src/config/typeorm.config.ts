import 'dotenv/config';
import { TypeOrmModuleOptions, } from '@nestjs/typeorm';

export const typeORMConfig : TypeOrmModuleOptions = {
	type: 'mysql',
	host: process.env.DATABASE_HOST || '',
	username: process.env.DATABASE_USER || '',
	database: process.env.DATABASE_NAME || '',
	password: process.env.DATABASE_PASSWORD || '',
	port: 3306,
	entities: [__dirname + '/../**/*.entity{.ts,.js}',],
	synchronize: true,
};
