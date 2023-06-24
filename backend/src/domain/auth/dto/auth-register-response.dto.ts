import { ApiProperty } from '@nestjs/swagger';

export class AuthRegisterResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phoneNumber: string;

  constructor(id: number, phoneNumber: string) {
    this.id = id;
    this.phoneNumber = phoneNumber;
  }
}
