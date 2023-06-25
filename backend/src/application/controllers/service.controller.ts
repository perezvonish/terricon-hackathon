import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiceService } from '../../domain/service/service.service';
import { EmployeeGuard } from '../guards/employee.guard';
import JwtAuthenticationGuard from '../guards/jwt-auth.guard';
import { IRequestUser } from '../../domain/auth/interface/request-user.interface';
import { ServiceCreateRequestDto } from '../../domain/service/dto/service-create-request.dto';

@ApiTags('service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('create')
  @UseGuards(JwtAuthenticationGuard, EmployeeGuard)
  async create(
    @Req() { user }: IRequestUser,
    @Body() dto: ServiceCreateRequestDto,
  ) {
    return this.serviceService.create(user.id, dto);
  }
}
