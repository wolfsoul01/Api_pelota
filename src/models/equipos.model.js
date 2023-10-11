import { conection } from '../utils/connectionDB'

export class EquipoModel {
  static async getAll () {
    const [data] = await conection.query('SELECT * FROM equipo')
    console.log(data)
    return data
  }
}
