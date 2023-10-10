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


}