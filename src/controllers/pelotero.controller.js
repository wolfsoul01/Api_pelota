import {PeloteroModel} from '../models/pelotero.model.js'

export class peloteroControllers{
 
    static async getAll (req,res){

       const data = await PeloteroModel.getAll()

        res.json(data)

    }
}