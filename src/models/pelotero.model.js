import { conection } from '../utils/connectionDB'
export class PeloteroModel {
  static async getAll () {
    const [data] = await conection.query('SELECT * FROM pelotero')
    console.log(data)
    return data
  }

  static async getById (id) {
    const [data] = await conection.query('SELECT * FROM pelotero where id_pelotero= ?', [id])
    return data
  }

  static async create ({ nombre, edad, exp, promBat }) {
    const id = (Math.random() * 100).toFixed()

    const info = await conection.execute(`INSERT INTO pelotero (id_pelotero,nombre,edad,anonn_exp,prom_bateo) VAlUES
            (?,?,?,?,?)
        `, [id, nombre, edad, exp, promBat])

    console.log(info)
  }
}
