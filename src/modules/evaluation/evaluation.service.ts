import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private evaluationRepository: Repository<Evaluation>
  ) {}

  async create(createEvaluationDto: CreateEvaluationDto) {
    const newEvaluation = await this.evaluationRepository.save(createEvaluationDto).then((eva) => eva.id);
    return newEvaluation;
  }

  findAll() {
    return this.evaluationRepository.find({
      relations: ['course']
    });
  }

  findOne(id: number) {
    return this.evaluationRepository.findOne({ where: { id } });
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationRepository.update(id, updateEvaluationDto).then((resp) => resp.affected > 0);
  }

  remove(id: number) {
    return this.evaluationRepository.delete(+id).then((resp) => resp.affected > 0);
  }
}
