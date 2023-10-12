import { connection } from '../utils/connectionDB.js'

export class PeloteroModel {
  static async getAll () {
    const [data] = await connection.query('SELECT * FROM pelotero')
    console.log(data)
    return data
  }

  static async getById (id) {
    const [data] = await connection.query('SELECT * FROM pelotero where id_jugador= ?', [id])
    return data
  }

  static async create (input) {
    const { name, age, exp, promBat } = input
    const info = await connection.execute(`INSERT INTO pelotero (name,age,exp,promBat) VAlUES
            (?,?,?,?)
        `, [name, age, exp, promBat])

    return info
  }

  static async udpate ({ id, input }) {
    // Esto devuelve un array con todos los resutados [[]] me quedo con el 1ro que deveria ser el unico
    const [[player]] = await connection.query('SELECT * FROM pelotero WHERE id_jugador = ?', [id])

    const newPlayer = {
      ...player,
      ...input
    }
    console.log(newPlayer)
    const valuesPlayer = Object.values(newPlayer)

    const stringUpdate = Object.keys(newPlayer).map(item => `${item}=?`).join(',')
    console.log(stringUpdate)

    await connection.execute(`UPDATE pelotero SET ${stringUpdate} WHERE id_jugador=?`, [...valuesPlayer, id])
  }
}
