import {
	Column, Entity, PrimaryGeneratedColumn, 
} from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
    	type : 'varchar',
    	length: 50,
    	nullable: false,
    	name: 'name',
    })
    name: string;

}
