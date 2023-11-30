import { Controller, Get, Post, Body,Put, Patch, Param, Delete, Res, Req, HttpStatus } from '@nestjs/common';
import { MycrudeService } from "./mycrude.service";
import { mainDTO } from './dto/create-mycrude.dto';
import { UpdateMycrudeDto } from './dto/update-mycrude.dto';
import {Request,Response} from 'express'
import { Any } from 'typeorm';

@Controller("mycrude")
export class MycrudeController {
  constructor(private readonly mycrudeService: MycrudeService,) {}

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
      // return data;
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: err,
      });
    }
  }

  @Get("getMasterData")
  async getMasterData(@Req() req, @Res() res) {
    try {
      const masterData = await this.mycrudeService.getMasterData();
      res.status(HttpStatus.OK).json({
        message: "Master data retrieved successfully",
        data: masterData,
      });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: err,
      });
    }
  }





//   @Post()
// async sendMail(@Body() mailData: { to: string, subject: string, text: string }) {
//     await this.mailServ.sendMail(mailData.to, mailData.subject, mailData.text);
//     return { message: 'Mail sent successfully' };
//   }


  // update by id
  // @Put("updateById/:id")
  // async updateById(@Req() req: Request, @Res() res: Response, @Param("id") id: number, @Body() updateMycrudeDto: UpdateMycrudeDto) {
  //   try {
  //     const updatedData = await this.mycrudeService.updateById(id, updateMycrudeDto);
  //     res.status(HttpStatus.OK).json({
  //       message: "Data updated successfully",
  //       data: updatedData,
  //     });
  //     return updatedData;
  //   } catch (err) {
  //     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
  //       message: "Something went wrong",
  //       error: err,
  //     });
  //   }
  // }

  }
  