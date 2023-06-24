import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { ParamIdDto } from '../dto/param-id.dto';
import { UserResponse } from '../../domain/users/dto/user-response';
import { UserChangePasswordRequestDto } from '../../domain/users/dto/user-change-password-request.dto';

@ApiTags('user')
@Controller('user')
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('by-id/:id')
  public async getById(@Param('id') param: ParamIdDto): Promise<UserResponse> {
    return this.userService.getUser(param.id);
  }

  @Patch('change-password')
  @ApiBadRequestResponse()
  public async changePassword(
    @Body()
    dto: UserChangePasswordRequestDto,
  ): Promise<void> {
    // return this.userService.changePassword(dto);
  }
}
