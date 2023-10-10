import {EquipoModel} from '../models/equipos.model.js'

export class equipoControllers{
 
    static async getAll (req,res){

       const data = EquipoModel.getAll()

        res.json(data)

    }
}