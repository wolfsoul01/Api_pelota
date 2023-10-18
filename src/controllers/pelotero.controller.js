import { PeloteroModel } from '../models/pelotero.model.js'

export class peloteroControllers {
  static async getAll (req, res) {
    const data = await PeloteroModel.getAll()

    res.json(data)
  }

  static async getById (req, res) {
    const { id } = req.params
    const data = await PeloteroModel.getById(id)

    res.json(data)
  }

  static async create (req, res) {
    const input = req.body

    await PeloteroModel.create(input)

    res.status(201).json({ msg: 'Player create ', input })
  }

  static async update (req, res) {
    const infoPlayer = req.body
    const { id } = req.params

    PeloteroModel.udpate({ id, input: infoPlayer })
    res.json(req.body)
  }

  static async delete (req, res) {
    const { id } = req.params

    PeloteroModel.delete(id).catch(err =>
      res.json({ msg: 'Error la borrar ', err })
    )

    res.json({ msg: 'Player Delet' })
  }
}
