import { PartialType } from '@nestjs/swagger';
import { mainDTO } from './create-mycrude.dto';

export class UpdateMycrudeDto extends PartialType(mainDTO) {}
