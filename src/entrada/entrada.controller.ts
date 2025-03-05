import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { Entrada } from './entrada.entity';
import { EntradaCadastrarDto } from './dto/entrada.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Controller('entrada')
export class EntradaController {
  constructor(private readonly entradaService: EntradaService) {}

  @Get('listar')
  async listar(): Promise<Entrada[]>{
    return this.entradaService.listar()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: EntradaCadastrarDto): Promise<ResultadoDto>{
    return this.entradaService.cadastrar(data)
  }
}
