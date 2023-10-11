import { connection } from '../utils/connectionDB.js'

export class PeloteroModel {
  static async getAll () {
    const [data] = await connection.query('SELECT * FROM pelotero')
    console.log(data)
    return data
  }

  static async getById (id) {
    const [data] = await connection.query('SELECT * FROM pelotero where id_pelotero= ?', [id])
    return data
  }

  static async create ({ nombre, edad, exp, promBat }) {
    const id = (Math.random() * 100).toFixed() // esto es temporal en lo que le pongo uuid 😅

    const info = await connection.execute(`INSERT INTO pelotero (id_pelotero,nombre,edad,anonn_exp,prom_bateo) VAlUES
            (?,?,?,?,?)
        `, [id, nombre, edad, exp, promBat])

    return info
  }
}
