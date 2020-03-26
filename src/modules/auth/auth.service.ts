
import { Injectable } from '@nestjs/common';
import { UserService } from 'modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    console.log(username, pass, "auth.service");

    const user = await this.userService.findOne(username, pass);
    console.log(user, "auth Service after FindOne ");
    console.log(user.password);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log(password, result);


      return result;
    }
    return null;
  }
}