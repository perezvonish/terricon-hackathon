import { AuthGuard } from '@nestjs/passport';
export default class JwtAuthenticationGuard extends AuthGuard('jwt') {}
