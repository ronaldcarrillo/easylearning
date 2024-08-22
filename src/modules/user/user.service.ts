import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserType } from './entities/userType.entity';

/**
 *Clase que contiene los métodos manipular la entity User y UserType.
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  /**
   * Método para crear un usuario.
   * @param {CreateUserDto} createUserDto Datos necesarios para crear un usuario.
   * @returns {number} Id del usuario creado.
   */
  async create(createUserDto: CreateUserDto): Promise<number> {
    const newUser = await this.userRepository.save(createUserDto);
    return newUser.id;
  }

  /**
   * Método para obtener todos los tipos de usurios.
   * @returns {UserType} objeto de tipo UserType.
   */
  getUserTypes(): Promise<UserType[]> {
    return this.userTypeRepository.find({
      relations: ['users']
    });
  }

  /**
   * Método para crear un tipo de usuario.
   * @param {UserType} createUSerType - Dato para la creación de un tipo de usuario.
   * @returns {Promise<UserType>} - Objeto USerType.
   */
  createUserType(createUSerType: UserType): Promise<UserType> {
    return this.userTypeRepository.save(createUSerType);
  }

  /**
   * Método para actualizar un tipo de usuario.
   * @param {UserType} userType - Datos para la actualización.
   * @param {number} id - Id para la búsqueda.
   * @returns {boolean} - retorna true si actualizó o false si no lo realizó.
   */
  async updateUserType(userType: Partial<UserType>, id: number): Promise<boolean> {
    const resp = await this.userTypeRepository.update(id, userType);
    return resp.affected > 0;
  }

  /**
   * Método para obtener todos los usuarios, incluyendo información del tipo de usuario y los mensajes
   * de los foros.
   * @returns {User[]} - Array de usuarios.
   */
  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['usertype', 'forumMessages']
    });
  }

  /**
   * Método para obtner un usuario.
   * @param {User} where - Filtro para la búsqueda.
   * @returns {Promise<User>} - Objeto de usuario.
   */
  findOne(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]): Promise<User> {
    return this.userRepository.findOne({ where });
  }

  /**
   * Método para buscar un tipo de usuario.
   * @param {number} id - Id para la buscqueda del tipo de usuario.
   * @returns {UserType} - Objeto de tipo UserType.
   */
  findOneType(id: number): Promise<UserType> {
    return this.userTypeRepository.findOne({ where: { id: id } });
  }

  /**
   * Método para actualizar un usuario.
   * @param {number} id - Id para la búsqueda del usario.
   * @param {UpdateUserDto} updateUserDto - Datos para la actualización.
   * @returns {boolean} - retorna true si actualizó o false si no lo realizó.
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<boolean> {
    const resp = await this.userRepository.update(id, updateUserDto);
    return resp.affected > 0;
  }
  /**
   * Método para la actualización de un tipo de usuario.
   * @param {number} id - Id para la actualización del usuario.
   * @param {UserType} updateType - Objeto con datos de UserType.
   *@returns {number} - Retirna el número de filas actualizadas.
   */
  async updateType(id: number, updateType: UserType): Promise<number> {
    const resp = await this.userTypeRepository.update(id, updateType);
    return resp.affected;
  }

  /**
   *Método para elimnar un usuario por id.
   * @param {number} id - Id del usuario a eliminar.
   * @returns {boolean} - Retorna true si se eliminó y false sino lo eliminó.
   */
  async remove(id: number): Promise<boolean> {
    const resp = await this.userRepository.delete(id);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar un tipo de usuario.
   * @param {number} id - Id del iusuario a eliminar.
   * @returns {boolean} - Retorna true si se eliminó y false sino lo eliminó.
   */
  async removeType(id: number): Promise<boolean> {
    const resp = await this.userTypeRepository.delete(id);
    return resp.affected > 0;
  }
}
