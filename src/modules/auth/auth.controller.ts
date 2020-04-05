
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) //using the local-auth.guard going -> local.strategies -> auth.service -> user.service
  @Post('auth/login') 
  async login( @Request() req: any) {
    return this.authService.login(req.user);
  }
}