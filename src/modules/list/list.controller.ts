import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode } from '@nestjs/common';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { ListDto } from './list.dto';
import { ListService } from './list.service';


@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)

export class ListController{
    constructor(private readonly listService: ListService){ }

    @Get('/getAllLists')
    public async getAllLists(
    ): Promise<ListDto[]> {
        return this.listService.getAllLists();
    }


    @Post('/createList')
    public async createNewList(
        @Body() newList: ListDto,
    ): Promise<ListDto> {
        return this.listService.createNewList(newList)
    }
    




}