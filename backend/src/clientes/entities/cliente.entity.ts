import { Column, Table, Model } from "sequelize-typescript";

@Table({
    tableName: "Clientes",
})
export class Cliente extends Model {
    @Column({
        primaryKey: true
    })
    id: string

    @Column({
        allowNull: false,
        unique: true
    })
    nome: string
}
