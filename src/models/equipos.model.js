import { connection } from '../utils/connectionDB.js'

export class EquipoModel {
  static async getAll () {
    const [data] = await connection.query('SELECT * FROM equipo')
    console.log(data)
    return data
  }

  static async create ({ input }) {
    console.log(input)
    const { nameEquip, init, equipDir, color } = input

    await connection.execute(`INSERT INTO equipo (nombre_equipo,init,equip_diret,color) VALUES
      (?,?,?,?)
    `, [nameEquip, init, equipDir, color])
  }
}
