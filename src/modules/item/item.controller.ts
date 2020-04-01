import { Get, Controller, Headers, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { ItemEntity } from './item.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { idFromJwt } from '../../helperfunctions/jwt.helper';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)
export class ItemController {
  constructor(private readonly itemService: ItemService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/getallitems')
  public async getAllItems(): Promise<ItemDto[]>{
    //console.log('service getallitems')
    return this.itemService.getAllItems()
    }


  @UseGuards(JwtAuthGuard)
  @Post('/createitem')
  public async createNewItem(
    @Headers()  header: any,
    @Body() newItem: any, 
  ): Promise<ItemDto> {
    const userId = idFromJwt(header.authorization)
    //console.log(listId, parseInt(listId));
    //newItem.list = parseInt(listId)
    return this.itemService.createNewItem(newItem, userId)
  }






}