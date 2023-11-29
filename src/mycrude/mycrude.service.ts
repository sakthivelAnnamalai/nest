import { Injectable } from "@nestjs/common";
// import { mainDTO } from "./dto/create-mycrude.dto";
// import { UpdateMycrudeDto } from "./dto/update-mycrude.dto";
import { Main, Hero, Heroine } from "./entities/mycrude.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
@Injectable()
export class MycrudeService {
  constructor(
    @InjectRepository(Hero) private readonly heroRepository: Repository<Hero>,
    @InjectRepository(Heroine)
    private readonly heroineRepository: Repository<Heroine>,
    @InjectRepository(Main) private readonly mainRepository: Repository<Main>,
  ) {}

  create(data) {
    return this.mainRepository.save(data);
  }



  // getbyId('getbyId'){
  //   return this.mainRepository.findOne()
  // }
  // create(MainDTO: mainDTO) {
  //   return 'This action adds a new mycrude';
  // }

  // findAll() {
  //   return `This action returns all mycrude`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} mycrude`;
  // }

  // update(id: number, updateMycrudeDto: UpdateMycrudeDto) {
  //   return `This action updates a #${id} mycrude`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} mycrude`;
  // }
}
