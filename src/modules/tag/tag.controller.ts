import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagDto } from './tag.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { TagEntity } from './tag.entity';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @Get('/getalltags')
  public async getAllTags(): Promise<TagDto[]>{
    //console.log('service getalltags')
    return this.tagService.getAllTags()
    }


  @Post('/createtag')
  public async createNewTag(
    @Body() newTag: TagDto,
  ): Promise<TagDto> {
    //console.log('createtag controller');
    return this.tagService.createNewTag(newTag)
  }

}