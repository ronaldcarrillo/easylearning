import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './entities/userType.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('createUsertype')
  createUserType(@Body() body: UserType) {
    return this.userService.createUserType(body);
  }

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get('types')
  findUserTypes() {
    return this.userService.getUserTypes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({ id: +id });
  }

  @Get('type/:id')
  findOneType(@Param('id') id: string) {
    return this.userService.findOneType(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Patch('type/:id')
  updateUSerType(@Param('id') id: string, @Body() updateType: UserType) {
    return this.userService.updateType(+id, updateType);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Delete('type/:id')
  removeType(@Param('id') id: string) {
    return this.userService.removeType(+id);
  }
}
