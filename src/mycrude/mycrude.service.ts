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

  // add movie details here
  create(data) {
    return this.mainRepository.save(data);
  }


  // get data by id
  async getbyId(id: number): Promise<Main> {
    const main = await this.mainRepository
      .createQueryBuilder('main')
      .where('main.id = :id', { id })
      .getOne();
      return main;

  }    

  // get all data from database
  async getAll(): Promise<Main[]> {
    return this.mainRepository.createQueryBuilder("main").getMany();
  }

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
