import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';

/**
 * Clase que contiene los métodos manipular la entity Forum y ForumMessage.
 */
@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileREpository: Repository<File>
  ) {}

  /**
   * Método para crear un File.
   * @param {CreateFileDto} createFileDto - Datos del File.
   * @returns {Promise<number>} - Id del Forum creado.
   */
  async create(createFileDto: CreateFileDto): Promise<number> {
    const resp = await this.fileREpository.save(createFileDto);
    return resp.id;
  }

  /**
   * Método para obtener todos lo Files.
   * @returns {Promise<File[]>} - Array de tipo File.
   */
  findAll(): Promise<File[]> {
    return this.fileREpository.find();
  }

  /**
   * Método para obtener un File por ID.
   * @param {number} id - ID del Forum a buscar.
   * @returns {Promise<File>} - Objeto de tipo File.
   */
  findOne(id: number): Promise<File> {
    return this.fileREpository.findOne({ where: { id } });
  }

  /**
   * Método para actualizar un File.
   * @param {number} id - ID del File a actualizar.
   * @param {UpdateFileDto} updateFileDto - Datos del File.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async update(id: number, updateFileDto: UpdateFileDto): Promise<boolean> {
    const resp = await this.fileREpository.update(id, updateFileDto);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar un Forum.
   * @param {number} id - ID del Forum a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async remove(id: number): Promise<boolean> {
    const resp = await this.fileREpository.delete(id);
    return resp.affected > 0;
  }
}
