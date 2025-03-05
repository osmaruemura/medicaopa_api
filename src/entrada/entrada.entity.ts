import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entrada {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10})
    dia: string;

    @Column({ length: 5})
    horario: string;

    @Column({ length: 10})
    sistolica: string;

    @Column({ length: 10})
    diastolica: string;
}
