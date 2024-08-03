import { PickType } from '@nestjs/mapped-types';
import { File } from '../entities/file.entity';

export class CreateFileDto extends PickType(File, ['name', 'url', 'extension', 'size']) {}
