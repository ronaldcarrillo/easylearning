import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserType } from './entities/userType.entity';
import { UserService } from './user.service';

/**
 *
 */

/**
 *
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Método para crear un usuario.
   * @param {CreateUserDto} createUserDto Datos necesarios para crear un usuario.
   * @returns {number} Id del usuario creado.
   */
  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<number> {
    return this.userService.create(createUserDto);
  }

  /**
   * Método para crear un tipo de usuario.
   * @param {UserType} body - Datos del tipo de usuario.
   * @returns {UserType} - Objeto de tipo UserType.
   */
  @Post('createUsertype')
  createUserType(@Body() body: UserType): Promise<UserType> {
    return this.userService.createUserType(body);
  }

  /**
   * Método para obtener todos los usuarios.
   * @returns {User[]} - Array de tipo User.
   */
  @Get('getAll')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  /**
   * Método para obtener todos los tipos de usuarios.
   * @returns {UserType[]} - Array de tipo UserType.
   */
  @Get('types')
  findUserTypes(): Promise<UserType[]> {
    return this.userService.getUserTypes();
  }

  /**
   * Método para buscar un usuario por ID.
   * @param {string} id - ID del usuario a buscar.
   * @returns {Promise<User>} - Objeto de tipo User.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne({ id: +id });
  }

  /**
   * Método para buscar un tipo de usuario por ID.
   * @param {string} id - ID para buscar el tipo de usuario.
   * @returns {Promise<UserType>} - Objeto de tipo UserType.
   */
  @Get('type/:id')
  findOneType(@Param('id') id: string): Promise<UserType> {
    return this.userService.findOneType(+id);
  }

  /**
   * Método para actuzalar un usuario.
   * @param {string} id - ID para buscar un usuario.
   * @param {UpdateUserDto} updateUserDto - Datos del usuario.
   * @returns {Promise<boolean>} - Retorna true si actualizó y false sino actualizó.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<boolean> {
    return this.userService.update(+id, updateUserDto);
  }

  /**
   * Método para actualizar un tipo de usuario por ID.
   * @param {string} id - ID del tipo de usuario a eliminar.
   * @param {UserType} updateType - Objeto de tipo UserType.
   * @returns {Promise<number>} - Devuelve el número de filas afectadas en la actualización.
   */
  @Patch('type/:id')
  updateUSerType(@Param('id') id: string, @Body() updateType: UserType): Promise<number> {
    return this.userService.updateType(+id, updateType);
  }

  /**
   * Método para eliminar un usuario por su ID.
   * @param {string} id - ID del usuario a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.userService.remove(+id);
  }

  /**
   * Método para eliminar un tipo de usuario por ID.
   * @param {string} id - ID del tipo de usuario a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete('type/:id')
  removeType(@Param('id') id: string): Promise<boolean> {
    return this.userService.removeType(+id);
  }
}
