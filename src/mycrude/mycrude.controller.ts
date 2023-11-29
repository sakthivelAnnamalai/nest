import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, HttpStatus } from '@nestjs/common';
import { MycrudeService } from "./mycrude.service";
import { mainDTO } from './dto/create-mycrude.dto';
import { UpdateMycrudeDto } from './dto/update-mycrude.dto';
import {Request,Response} from 'express'

@Controller("mycrude")
export class MycrudeController {
  constructor(private readonly mycrudeService: MycrudeService) {}

  @Post("create")
  async create(@Req() req: Request, @Res() res: Response, @Body() data: mainDTO) {
   try{

    const d=await this.mycrudeService.create(data);
    res.status(HttpStatus.OK).json({
      message:'successfully added',
      value:data
    })
    return d;
   }
  catch(err){
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message:'somthing went wrong',
      errro:err
    })
    
  }
}



  // @Get()
  // findAll() {
  //   return this.mycrudeService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.mycrudeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMycrudeDto: UpdateMycrudeDto) {
  //   return this.mycrudeService.update(+id, updateMycrudeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.mycrudeService.remove(+id);
  // }
  }
  