import { PickType } from '@nestjs/mapped-types';
import { Evaluation } from '../entities/evaluation.entity';

export class CreateEvaluationDto extends PickType(Evaluation, ['description']) {}
