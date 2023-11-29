import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, User } from './entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role,User])],   
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
