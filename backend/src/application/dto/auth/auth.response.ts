import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginSuccess {
  @ApiProperty()
  token: string;
}
