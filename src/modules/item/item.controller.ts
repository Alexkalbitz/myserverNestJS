import { Get, Controller, Headers, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, ParseUUIDPipe, Put, Patch, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
import { GlobalErrorFilter } from '../../global.error.filter';
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
  @Post('/createitem/:listId')
  public async createNewItem(
    @Headers()  header: any,
    @Param('listId', ParseUUIDPipe) listId:string,
    @Body() newItem: any, 
  ): Promise<ItemDto> {
    const userId = idFromJwt(header.authorization)
    const response =  this.itemService.createNewItem(newItem, userId, listId)
    return response
  }


  @UseGuards(JwtAuthGuard)
  @Put('/updateitem/:listId')
  public async updateItem(
    @Headers()  header: any,
    @Param('listId', ParseUUIDPipe) listId:string,
    @Body() newItem: any, 
  ): Promise<ItemDto> {
    const userId = idFromJwt(header.authorization)
    const response =  this.itemService.updateItem(newItem, userId, listId)
    return response
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/deleteitem/:itemId')
  public async deleteItem(
    @Headers()  header: any,
    @Param('itemId', ParseUUIDPipe) itemId:string,
  ): Promise<any> {
    const userId = idFromJwt(header.authorization)
    const response =  this.itemService.deleteItem(userId, itemId)
    return response
  }


}