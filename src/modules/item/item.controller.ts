import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { ItemEntity } from './item.entity';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class ItemController {
  constructor(private readonly itemService: ItemService) { }

  @Get('/getallitems')
  public async getAllItems(): Promise<ItemDto[]>{
    //console.log('service getallitems')
    return this.itemService.getAllItems()
    }


  @Post('/createitem')
  public async createNewItem(
    @Body() newItem: ItemDto,
  ): Promise<ItemDto> {
    //console.log('createitem controller');
    return this.itemService.createNewItem(newItem)
  }

}