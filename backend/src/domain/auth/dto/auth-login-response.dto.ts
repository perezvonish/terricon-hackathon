import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Ijc3MDE3NzQ0Mzc0Iiwicm9sZSI6IkNMSUVOVCIsImlzVmVyaWZ5IjpmYWxzZSwicmVnaXN0ZXJBdCI6IjIwMjMtMDYtMjRUMDI6MzA6MTAuODE0WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMjRUMDI6MzA6MTAuODE0WiIsImlhdCI6MTY4NzU3NDE3OCwiZXhwIjoxNjg3ODMzMzc4fQ.B94HHDr7VoAwgMqF_NeDoE6HsAplYDZ5wRKxtok0hP4',
    description: 'jwt bearer token',
  })
  token: string;
}
