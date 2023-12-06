import { IsString } from 'class-validator';

export class GetUserDto {
    @IsString()
    userId: string;

    @IsString()
    userName: string;

    @IsString()
    password: string;

    @IsString()
    role: string;
}
