import { DataSource } from 'typeorm';
import { Entrada } from './entrada.entity';

export const entradaProviders = [
    {
        provide: 'ENTRADA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Entrada),
        inject: ['DATABASE_CONNECTION'],
    },
];

//useFactory: (connection: Connection) => dataSource.getRepository(Entrada),
