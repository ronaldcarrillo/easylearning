import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluationDto } from './create-evaluation.dto';

/**
 * Clase con propiedades opcionales para actualizar una evaluation.
 */
export class UpdateEvaluationDto extends PartialType(CreateEvaluationDto) {}
