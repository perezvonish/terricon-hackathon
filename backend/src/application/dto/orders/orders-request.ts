import { ApiProperty } from '@nestjs/swagger';

export class OrdersCreate {
  @ApiProperty()
  clientId: number;

  @ApiProperty()
  employeeId: number;

  @ApiProperty()
  address: string;

  @ApiProperty()
  time: number;

  @ApiProperty()
  price: number;
}

export class GetOrdersList {
  @ApiProperty()
  userId: number;
}
