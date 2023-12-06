import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { validate } from './config/env.validation';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `${process.cwd()}/src/config/env/.env.${process.env.NODE_ENV}`,
			validate
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: true,
			autoSchemaFile: join(process.cwd(),'/src/schema.gql')
		}),
		TypeOrmModule.forRootAsync(typeORMConfig),
		UsersModule]
})
export class AppModule {
}
