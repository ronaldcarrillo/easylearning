import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';
import { FileModule } from './modules/file/file.module';
import { ForumModule } from './modules/forum/forum.module';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';

/**
 * Módulo principal, contiene todas las importaciones de los services
 * y datos de la conexión a la BD.
 */
@Module({
  imports: [
    UserModule,
    CourseModule,
    ForumModule,
    EvaluationModule,
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'easylearning',
      autoLoadEntities: true //Propiedad creada para que
      // synchronize:true,
    }),
    ForumModule,
    EvaluationModule,
    TaskModule,
    FileModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
