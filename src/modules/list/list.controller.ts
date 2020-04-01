import { Get, Controller, Param, Query, Headers, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { GlobalErrorFilter } from '../../global.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';
import { ListDto } from './list.dto';
import { ListService } from './list.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { jwtConstants } from '../auth/constants';
import { MyErrorException } from './exceptions/myerror.exception';
import { idFromJwt } from '../../helperfunctions/jwt.helper';

@Controller('/api')
@UsePipes(ValidationPipe)
@UseFilters(GlobalErrorFilter)

export class ListController{
    constructor(private readonly listService: ListService){ }


    @UseGuards(JwtAuthGuard)
    @Get('/getalllists')
    public async getAllLists(
    ): Promise<ListDto[]> {
        return this.listService.getAllLists();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/createlist')
    public async createNewList(
        @Headers()  header: any,
        @Body() newList: ListDto,
    ): Promise<ListDto> {
        const userId = idFromJwt(header.authorization)
        return this.listService.createNewList(newList, userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatelist')
    public async updateList(
        @Headers()  header: any,
        @Body() toupdate: ListDto,
    ): Promise<ListDto> {
        const userId = idFromJwt(header.authorization)
        return this.listService.updateList(toupdate, userId)
    }

    
}


