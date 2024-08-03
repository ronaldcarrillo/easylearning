import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileREpository: Repository<File>
  ) {}
  create(createFileDto: CreateFileDto) {
    return this.fileREpository.save(createFileDto).then((resp) => resp.id);
  }

  findAll() {
    return this.fileREpository.find();
  }

  findOne(id: number) {
    return this.fileREpository.findOne({ where: { id } });
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return this.fileREpository.update(id, updateFileDto).then((resp) => resp.affected > 0);
  }

  remove(id: number) {
    return this.fileREpository.delete(id).then((resp) => resp.affected > 0);
  }
}
