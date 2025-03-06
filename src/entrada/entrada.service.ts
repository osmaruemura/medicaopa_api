import { Injectable, Inject } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Entrada } from './entrada.entity';
import { EntradaCadastrarDto } from "./dto/entrada.cadastrar.dto";
import { ResultadoDto } from "src/dto/resultado.dto";

@Injectable()
export class EntradaService {
    constructor(
        @Inject('ENTRADA_REPOSITORY')
        private entradaRepository: Repository<Entrada>,
    )   {}

    async listar(): Promise<Entrada[]> {
        return this.entradaRepository.find();
    }

    async cadastrar(data: EntradaCadastrarDto): Promise<ResultadoDto>{
        let entrada = new Entrada()
        entrada.dia = data.dia
        entrada.horario = data.horario
        entrada.sistolica = data.sistolica
        entrada.diastolica = data.diastolica

        return this.entradaRepository.save(entrada)
        .then((result) => {
            return <ResultadoDto>{
                status: true,
                mensagem: "Dados cadastrado com sucesso"
            }
        })
        .catch((error) => {
            return <ResultadoDto>{
                status: false,
                mensagem: "Houve um erro no cadastro dos dados"
            }
        })
    }
}
