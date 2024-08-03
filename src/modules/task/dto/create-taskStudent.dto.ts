import { PickType } from '@nestjs/mapped-types';
import { TaskStudent } from '../entities/taskStudent.entity';

export class CreateTasStudentkDto extends PickType(TaskStudent, ['grade']) {}
