import { PickType } from '@nestjs/mapped-types';
import { Forum } from '../entities/forum.entity';

/**
 * Datos necesarios para crear un Forum.
 */
export class CreateForumDto extends PickType(Forum, ['name', 'description']) {}
