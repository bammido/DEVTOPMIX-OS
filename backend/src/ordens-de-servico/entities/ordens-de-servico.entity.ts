import { Column, Table, Model } from "sequelize-typescript";

@Table({ 
    tableName: 'OrdensDeServico',
})

export class OrdemDeServico extends Model {

    @Column
    cliente: number;

    @Column
    colaborador: number;
    
    @Column
    texto: string;
}
