import { PartialType } from '@nestjs/mapped-types';
import { CreateTasStudentkDto } from './create-taskStudent.dto';

export class UpdateTaskDto extends PartialType(CreateTasStudentkDto) {}
