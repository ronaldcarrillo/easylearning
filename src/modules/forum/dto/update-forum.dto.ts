import { PartialType } from '@nestjs/mapped-types';
import { CreateForumDto } from './create-forum.dto';

/**
 * Datos opcionales para actualizar un Forum.
 */
export class UpdateForumDto extends PartialType(CreateForumDto) {}
