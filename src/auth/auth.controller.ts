import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  signUp(@Body() userData: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(userData);
  }

  @Post("/signin")
  signIn(@Body() userData: AuthCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.signIn(userData);
  }
}
