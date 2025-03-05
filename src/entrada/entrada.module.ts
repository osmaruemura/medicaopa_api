import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { entradaProviders } from './entrada.providers';
import { EntradaService } from './entrada.service';
import { EntradaController } from './entrada.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [EntradaController],
    providers: [
        ...entradaProviders,
        EntradaService,
    ],
    //exports: [EntradaService]
})
export class EntradaModule {}
