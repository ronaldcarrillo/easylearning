import { PickType } from '@nestjs/mapped-types';
import { Evaluation } from '../entities/evaluation.entity';

/**
 * Clase con propiedades necesarias para crear una evaluation.
 */
export class CreateEvaluationDto extends PickType(Evaluation, ['description']) {}
