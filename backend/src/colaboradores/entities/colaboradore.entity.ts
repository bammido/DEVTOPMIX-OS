import { Table, Column, Model } from "sequelize-typescript";
import { DataTypes } from "sequelize/types";

@Table({
    tableName: "Colaboradores",
})
export class Colaboradore extends Model {
    @Column({primaryKey: true,})
    id: string

    @Column({
        allowNull: false
    })
    nome: string

    @Column({
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        allowNull: false
    })
    senha: string
}
