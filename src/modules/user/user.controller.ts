import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode, UseGuards, Header, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { UserEntity } from './user.entity';


@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class UserController {
  constructor(private readonly userService: UserService) { }



  @Get('/getallusers')
  // by passing @Req to getAllUsers() i get access to the request headers and can decode the jwt 
  public async getAllUsers(@Req() request: any): Promise<UserDto[]> {
    return this.userService.getAllUsers()
  }


  @Post('/createuser')
  public async createNewUser(
    @Body() newUser: UserDto,
  ): Promise<UserDto> {
    return this.userService.createNewUser(newUser)
  }

}