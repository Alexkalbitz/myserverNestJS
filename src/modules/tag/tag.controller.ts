import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagDto } from './tag.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { TagEntity } from './tag.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/getalltags')
  public async getAllTags(): Promise<TagDto[]>{
    //console.log('service getalltags')
    return this.tagService.getAllTags()
    }

  @UseGuards(JwtAuthGuard)
  @Post('/createtag')
  public async createNewTag(
    @Body() newTag: TagDto,
  ): Promise<TagDto> {
    //console.log('createtag controller');
    return this.tagService.createNewTag(newTag)
  }

}