
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'modules/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user.password === pass) {
      const { password, ...result } = user;
      return result;
    } else {
      return null;
    }
  }


  async login(user: any) {
    const payload = { username: user.username, id: user.id };
    const response = {
      userId: user.id,
      access_token: this.jwtService.sign(payload),
    };
    console.log(response.access_token);
    console.log(response.userId);
    
    return response
  }

}


