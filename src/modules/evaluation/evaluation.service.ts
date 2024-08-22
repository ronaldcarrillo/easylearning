import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';

/**
 * Clase que contiene los métodos manipular la entity Evaluation.
 */
@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private evaluationRepository: Repository<Evaluation>
  ) {}

  /**
   * Método para crear una Evaluation.
   * @param {CreateEvaluationDto} createEvaluationDto - Datos para crear una Evaluation.
   * @returns {Promise<number>} - ID de la Evaluation creada.
   */
  async create(createEvaluationDto: CreateEvaluationDto): Promise<number> {
    const newEvaluation = await this.evaluationRepository.save(createEvaluationDto).then((eva) => eva.id);
    return newEvaluation;
  }

  /**
   * Método para obtener todas las Evaluations.
   * @returns {Promise<Evaluation[]>} - Array de tipo Evaluation.
   */
  findAll(): Promise<Evaluation[]> {
    return this.evaluationRepository.find({
      relations: ['course']
    });
  }

  /**
   * Método para buscar una Evaluation.
   * @param {number} id - ID de la Evaluation a buscar.
   * @returns {Promise<Evaluation>} - Objeto de tipo Evaluation.
   */
  findOne(id: number): Promise<Evaluation> {
    return this.evaluationRepository.findOne({ where: { id } });
  }

  /**
   * Método para actualizar una Evaluation.
   * @param {number} id - ID de la Evaluation a actualizar.
   * @param {UpdateEvaluationDto} updateEvaluationDto - Datos de la Evaluation.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  async update(id: number, updateEvaluationDto: UpdateEvaluationDto): Promise<boolean> {
    const resp = await this.evaluationRepository.update(id, updateEvaluationDto);
    return resp.affected > 0;
  }

  /**
   * Método para eliminar una Evaluation.
   * @param {number} id - ID de la Evaluation a eliminar.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  async remove(id: number): Promise<boolean> {
    const resp = await this.evaluationRepository.delete(+id);
    return resp.affected > 0;
  }
}
