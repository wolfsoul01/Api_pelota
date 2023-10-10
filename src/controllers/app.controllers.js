import mysql2 from 'mysql2'

const config= {
    host:'127.0.0.2',
    user:'root',
    password:'admin',
    database:'mydb'
}

const conection = mysql2.createConnection(config)



export class appControllers{
 
    static async appGet (req,res){

        conection.connect(err => {

            if(err) {
              console.error(err);
              return res.status(500).json({msg: 'Error de conexión a DB'}); 
            } 

          });

           conection.query(`SELECT * FROM juegos
         `,(err,data)=>{
            console.log(data);
            res.json(data)
         })

    }
}