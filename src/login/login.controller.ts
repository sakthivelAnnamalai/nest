import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, Req } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Response, Request } from 'express'


@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async webLogin(@Body() data: any, @Res() res: Response, @Req() req:Request) {
      try {
          let verfied = await this.loginService.login(data)
          // if (verfied.status) {
          //     res.status(HttpStatus.OK).json({
          //         success: true,
          //         message: 'Login successfully',

          //         token: verfied.token,
          //         username: loginData.email,
          //     })
          // } else {
          //     res.status(HttpStatus.OK).json({
          //         success: false,
          //         message: 'Username and password is invalid'
          //     })
          // }
      } catch (error) {
          console.log(error)
          res.status(HttpStatus.OK).json({
              success: false,
              message: 'Error in genweb loginerateCode'
          })
      }
  }
}
