import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { UserEntity } from './user.entity';
import { JwtAuthGuard } from 'modules/auth/jwt-auth.guard';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class UserController {
  constructor(private readonly userService: UserService) { }

  
  @UseGuards(JwtAuthGuard)
  @Get('/getallusers')
  public async getAllUsers(): Promise<UserDto[]>{
    //console.log('service getallusers')
    return this.userService.getAllUsers()
    }


  @Post('/createuser')
  public async createNewUser(
    @Body() newUser: UserDto,
  ): Promise<UserDto> {
    //console.log('createuser controller');
    return this.userService.createNewUser(newUser)
  }

}