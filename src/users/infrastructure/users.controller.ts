import { Controller, Get, HttpStatus, Inject, Param, Res } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get(':id')
  getUsers(@Res() res, @Param('id') id) {
    return res.status(HttpStatus.OK).json({
      message: `Get user ${id}`,
    });
  }
}
