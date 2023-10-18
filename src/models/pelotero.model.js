import { connection } from '../utils/connectionDB.js'

export class PeloteroModel {
  static async getAll () {
    const [data] = await connection.query('SELECT * FROM pelotero')
    console.log(data)
    return data
  }

  static async getById (id) {
    const [data] = await connection.query(
      'SELECT * FROM pelotero where id_jugador= ?',
      [id]
    )
    return data
  }

  static async create (input) {
    const { name, age, exp, promBat } = input
    const info = await connection.execute(
      `INSERT INTO pelotero (name,age,exp,promBat) VAlUES
            (?,?,?,?)
        `,
      [name, age, exp, promBat]
    )

    return info
  }

  static async udpate ({ id, input }) {
    const valuesPlayer = Object.values(input)

    const stringUpdate = Object.keys(input)
      .map(item => `${item}=?`)
      .join(',')

    await connection.execute(
      `UPDATE pelotero SET ${stringUpdate} WHERE id_jugador=?`,
      [...valuesPlayer, id]
    )
  }

  static async delete (id) {
    await connection.execute('DELETE FROM pelotero WHERE id_jugador=? ', [id])
  }
}
