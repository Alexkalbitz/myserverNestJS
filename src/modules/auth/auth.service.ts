
import { Injectable } from '@nestjs/common';
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
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
  
    async login(user: any) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }


  
  /* ------ version before jwt
  async validateUser(username: string, pass: string): Promise<any> {
    console.log(username, pass, "auth.service");

    // findOne in user.service
    const user = await this.userService.findOne(username, pass);
    console.log(user, "auth Service after FindOne ");

    if (user && user.password === pass) {
      // takes out the password from the user object rest goes to result
      const { password, ...result } = user;
      //console.log(password, result);

      // returns result without password
      return result;
    }
    return null;
  }
  */
