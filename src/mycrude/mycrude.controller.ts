import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, HttpStatus } from '@nestjs/common';
import { MycrudeService } from "./mycrude.service";
import { mainDTO } from './dto/create-mycrude.dto';
import { UpdateMycrudeDto } from './dto/update-mycrude.dto';
import {Request,Response} from 'express'
import { Any } from 'typeorm';

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

//  this api is get by movie name
  @Get("getbyId/:id")
  async getbyId(@Req() req: Request, @Res() res: Response, @Param("id") id:number) {
    try {
      const d = await this.mycrudeService.getbyId(id);
      res.status(HttpStatus.OK).json({
        message: "this is the data ",
        datas: d,
      });
      return d;
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "somthing went wrong",
        errro: err,
      });
    }
  }

  //  get all data
  @Get("getAll")
  async getAll(@Req() req: Request, @Res() res: Response) {
    try {
      const data = await this.mycrudeService.getAll();
      res.status(HttpStatus.OK).json({
        message: "Data retrieved successfully",
        datas: data,
      });
      return data;
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: err,
      });
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
  