import { connection } from '../utils/connectionDB.js'

export class EquipoModel {
  static async getAll () {
    const [data] = await connection.query('SELECT * FROM equipo')
    console.log(data)
    return data
  }
}
