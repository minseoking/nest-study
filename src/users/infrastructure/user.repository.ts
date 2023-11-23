import { DataSource, Repository, } from 'typeorm';
import { UserEntity, } from '../domain/user.entity';
import { Injectable, } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
	constructor(dataSource: DataSource) {
		super(UserEntity, dataSource.createEntityManager());
	}

	async getUserEntityById(id: number) : Promise<UserEntity> {
		console.log(id);

		return await this.findOneBy({ id:id, });
	}
}
