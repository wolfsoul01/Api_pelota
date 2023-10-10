import mysql2 from 'mysql2/promise'

const config= {
    host:'127.0.0.2',
    user:'root',
    password:'admin',
    database:'mydb'
}

const conection = await mysql2.createConnection(config)


export class PeloteroModel{

    static async getAll(){

        const [data] = await conection.query(`SELECT * FROM pelotero`)
        console.log(data);
        return data
    }
    static async getById(id){

        const [data] = await conection.query(`SELECT * FROM pelotero where id_pelotero= ?`,[id])
        return data
    }
    static async create ({nombre,edad,exp,promBat}){
    
        const id = (Math.random()*100).toFixed()

        const info = await conection.execute(`INSERT INTO pelotero (id_pelotero,nombre,edad,anonn_exp,prom_bateo) VAlUES
            (?,?,?,?,?)
        `,[id,nombre,edad,exp,promBat])

        console.log(info);
    }


}