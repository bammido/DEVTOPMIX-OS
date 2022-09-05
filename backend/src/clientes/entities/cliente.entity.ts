import { Column, Table, Model } from "sequelize-typescript";

@Table({
    tableName: 'Clientes',
})
export class Cliente extends Model {

    @Column
    nome: string
}
