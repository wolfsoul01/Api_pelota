import { EquipoModel } from '../models/equipos.model.js'

export class equipoControllers {
  static async getAll (req, res) {
    const data = await EquipoModel.getAll()

    res.json(data)
  }

  static async create (req, res) {
    try {
      EquipoModel.create({ input: req.body })
    } catch (error) {
      console.log(error)
      return res.json({ msg: 'Error en la db ', error })
    }

    res.status(201).json({ msg: 'Creado ' })
  }
}
