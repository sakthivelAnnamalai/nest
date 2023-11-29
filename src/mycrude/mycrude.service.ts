import { Injectable, NotFoundException } from "@nestjs/common";
import { mainDTO } from "./dto/create-mycrude.dto";
import { UpdateMycrudeDto } from "./dto/update-mycrude.dto";
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
  async getbyId(id: number) {
    const d = await this.mainRepository
      .createQueryBuilder("main")
      .where("main.id = :id", { id })
      .getOne();
    return d;

  }    

  // get all data from database both master table
  async getAll(){
    const mainData = await this.mainRepository
      .createQueryBuilder("main")
      .getMany();

    return mainData;
  }
  

  async getMasterData(){
    const heroes = await this.heroRepository.find({ select: ["id", "name"] });
    const heroines = await this.heroineRepository.find({
      select: ["id", "name"],
    });

    return { heroes, heroines };
  }


  // update by id

  

  // async updateById(id: number, updateMycrudeDto: UpdateMycrudeDto): Promise<Main> {
  //   try {
  //     const existingData = await this.mainRepository.findOne(id);

  //     if (!existingData) {
  //       throw new NotFoundException(`Data with ID ${id} not found`);
  //     }

  //     existingData.mName = updateMycrudeDto.mName;
  //     existingData.heroId = updateMycrudeDto.heroId;
  //     existingData.heroineId = updateMycrudeDto.heroineId;
  //     existingData.rDate = updateMycrudeDto.rDate;
  //     existingData.collection = updateMycrudeDto.collection;
  //     existingData.rating = updateMycrudeDto.rating;

  //     return await this.mainRepository.save(existingData);
  //   } catch (error) {
  //     throw new Error(`Error updating data with ID ${id}: ${error.message}`);
  //   }
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
