import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { User } from './entities/login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

 
 async login(data){
    let user= await this.userRepository.createQueryBuilder('user')
    .select(`user.email,user.roleId,user.password`)
    .where('user.emai=:email',{email:data.email})
    .execute()
    if(user){
      let ifPassword = await bcrypt.compare(
        data['password'],
        user.password,
        );
        
    }
  }
}
