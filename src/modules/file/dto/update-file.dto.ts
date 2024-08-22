import { PartialType } from '@nestjs/mapped-types';
import { CreateFileDto } from './create-file.dto';

/**
 * Clase con propiedades opcionales para actualizar.
 */
export class UpdateFileDto extends PartialType(CreateFileDto) {}
