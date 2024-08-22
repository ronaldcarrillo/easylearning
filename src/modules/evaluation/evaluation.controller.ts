import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { EvaluationService } from './evaluation.service';

/**
 * Clase controladora para comunicarse con el service de evaluation.
 */
@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  /**
   * Método para crear una evaluation.
   * @param {CreateEvaluationDto} createEvaluationDto - Datos para crear una evaluation.
   * @returns {Promise<number>} - ID de la evaluation creada.
   */
  @Post()
  create(@Body() createEvaluationDto: CreateEvaluationDto): Promise<number> {
    return this.evaluationService.create(createEvaluationDto);
  }

  /**
   * Método para obtener todas las evaluations.
   * @returns {Promise<Evaluation[]>} - Array de tipo Evaluation.
   */
  @Get()
  findAll(): Promise<Evaluation[]> {
    return this.evaluationService.findAll();
  }

  /**
   * Método para obtener una evaluation por ID.
   * @param {string} id - ID de la Evaluation a buscar.
   * @returns {Promise<Evaluation>} - Objeto de tipo Evaluation.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Evaluation> {
    return this.evaluationService.findOne(+id);
  }

  /**
   * Método para actualizar un Evaluation.
   * @param {string} id - ID de la Evaluation a actualizar.
   * @param {UpdateEvaluationDto} updateEvaluationDto - Datos de la Evaluation.
   * @returns {Promise<boolean>} - true si actualizó, false sino actualizó.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationDto: UpdateEvaluationDto): Promise<boolean> {
    return this.evaluationService.update(+id, updateEvaluationDto);
  }

  /**
   * Método para eliminar una Evaluation.
   * @param {string} id - ID de la evaluation.
   * @returns {Promise<boolean>} - true si eliminó, false sino eliminó.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.evaluationService.remove(+id);
  }
}
