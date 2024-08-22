import { PickType } from '@nestjs/mapped-types';
import { File } from '../entities/file.entity';

/**
 * Clase con propiedades necesarias para crear un File.
 */
export class CreateFileDto extends PickType(File, ['name', 'url', 'extension', 'size']) {}
