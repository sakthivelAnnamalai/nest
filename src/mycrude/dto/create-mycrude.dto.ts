import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsNumber, Min } from "class-validator";

export class mainDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  heroId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  heroineId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  rDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  collection: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  rating: number;
}
