import { Module } from '@nestjs/common';
import { MycrudeService } from './mycrude.service';
import { MycrudeController } from './mycrude.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Hero, Heroine, Main} from './entities/mycrude.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Hero, Heroine, Main])],
  controllers: [MycrudeController],
  providers: [MycrudeService],
})
export class MycrudeModule {}
