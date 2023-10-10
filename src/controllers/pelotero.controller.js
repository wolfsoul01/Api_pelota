import {PeloteroModel} from '../models/pelotero.model.js'

export class peloteroControllers{
 
    static async getAll (req,res){

       const data = await PeloteroModel.getAll()

        res.json(data)

    }
    static async getById (req,res){

        const {id}=req.params

       const data = await PeloteroModel.getById(id)

        res.json(data)

    }
    static async create (req,res){

        const input = req.body

        

        res.json(input)

    }
}