import { Column, Table, Model} from 'sequelize-typescript'

@Table({
    tableName: "Ordensdeservico"
})
export class OrdensDeServico extends Model{
   @Column({
    primaryKey: true
   })
   id: string

   @Column({
    allowNull: false
   })
   cliente: string

   @Column({
    allowNull: false
   })
   colaborador: string

   @Column({
    allowNull: true,
   })
   texto: string

}
