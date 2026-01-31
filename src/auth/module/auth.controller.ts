import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import * as auth from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './dtos/auth.guard';


@Controller('auth')
export class AuthController {
  
  // Inject AuthService
  constructor (private authService: AuthService) {}
  
  // Post request to /auth/signup
  @Post('signup')
  async signup(@Body() body: auth.SignupDto) {
   
    return  await this.authService.signup(body);
  }

  // Post request to /auth/signin
  @Post('signin')
  async signin(@Body() body: auth.SigninDto) {
    await this.authService.signin(body);
    
    return body;
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Request() request) {
    return request.user;
  }
}
