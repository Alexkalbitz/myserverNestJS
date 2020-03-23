import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './group.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { GroupEntity } from './group.entity';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class GroupController {
  constructor(private readonly groupService: GroupService) { }

  @Get('/getallgroups')
  public async getAllGroups(): Promise<GroupDto[]>{
    //console.log('service getallgroups')
    return this.groupService.getAllGroups()
    }


  @Post('/creategroup')
  public async createNewGroup(
    @Body() newGroup: GroupDto,
  ): Promise<GroupDto> {
    //console.log('creategroup controller');
    return this.groupService.createNewGroup(newGroup)
  }

}