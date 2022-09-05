import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'Colaboradores'
})

export class Colaborador extends Model {

    @Column
    nome: string;

    @Column
    email: string;

    @Column
    senha: string;

}
