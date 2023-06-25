import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../../domain/users/users.service';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { ParamIdDto } from '../dto/param-id.dto';
import { UserResponse } from '../../domain/users/dto/user-response';
import { UserChangePasswordRequestDto } from '../../domain/users/dto/user-change-password-request.dto';
import JwtAuthenticationGuard from '../guards/jwt-auth.guard';
import { IRequestUser } from '../../domain/auth/interface/request-user.interface';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('by-id/:id')
  @UseGuards(JwtAuthenticationGuard)
  public async getById(@Param('id') param: ParamIdDto): Promise<UserResponse> {
    return this.userService.getUser(param.id);
  }

  @Patch('change-password')
  @ApiBadRequestResponse()
  @UseGuards(JwtAuthenticationGuard)
  public async changePassword(
    @Req() { user }: IRequestUser,
    @Body()
    dto: UserChangePasswordRequestDto,
  ): Promise<void> {
    return this.userService.changePassword(user, dto);
  }
}
