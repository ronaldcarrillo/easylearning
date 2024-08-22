import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
import { FileService } from './file.service';

/**
 * Clase controladora para comunicarse con el service se Forum.
 */
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  /**
   * Método para crear un Forum.
   * @param {CreateFileDto} createFileDto - Datos del Forum.
   * @returns {Promise<number>} - ID del Forum creado.
   */
  @Post()
  create(@Body() createFileDto: CreateFileDto): Promise<number> {
    return this.fileService.create(createFileDto);
  }

  /**
   * Método para obtener todos los Forum.
   * @returns {Promise<File[]>} - arrray de tipo File.
   */
  @Get()
  findAll(): Promise<File[]> {
    return this.fileService.findAll();
  }

  /**
   * Método para obtener un Forum por ID.
   * @param {string} id - ID del Forum a buscar.
   * @returns {Promise<File>} - Objeto de tipo File.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<File> {
    return this.fileService.findOne(+id);
  }

  /**
   * Método para actualizar un Forum.
   * @param {string} id - ID del Forum a actualizar.
   * @param {UpdateFileDto} updateFileDto - Datos del Forum.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto): Promise<boolean> {
    return this.fileService.update(+id, updateFileDto);
  }

  /**
   *
   * @param {string} id - ID del Forum a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.fileService.remove(+id);
  }
}
