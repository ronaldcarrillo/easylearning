import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserType } from './entities/userType.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.save(createUserDto);
    return newUser;
  }

  getUserTypes() {
    return this.userTypeRepository.find({
      relations: ['users']
    });
  }

  createUserType(createUSerType: UserType) {
    return this.userTypeRepository.save(createUSerType);
  }

  updateUserType(userType: Partial<UserType>, id: number) {
    return this.userTypeRepository.update(id, userType).then((resp) => resp.affected > 0);
  }

  findAll() {
    return this.userRepository.find({
      relations: ['usertype', 'forumMessages']
    });
  }

  findOne(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
    return this.userRepository.findOne({ where });
  }

  findOneType(id: number) {
    return this.userTypeRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto).then((resp) => resp.affected > 0);
  }
  updateType(id: number, updateType: UserType) {
    return this.userTypeRepository.update(id, updateType).then((resp) => resp.affected);
  }

  remove(id: number) {
    return this.userRepository.delete(id).then((resp) => resp.affected > 0);
  }

  removeType(id: number) {
    return this.userTypeRepository.delete(id).then((resp) => resp.affected > 0);
  }
}
