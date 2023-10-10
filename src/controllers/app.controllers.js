import mysql2 from 'mysql2'

const config= {
    host:'127.0.0.2',
    user:'root',
    password:'admin',
    database:'mydb'
}

const conection = mysql2.createConnection(config)


const createQuery =(query)=>{

  return new Promise((res,rej)=>{

    conection.query(query,(err,data)=>{

      if(err) rej(err)

      res(data)
      console.log(data);

    })

  })
}


export class appControllers{
 
    static async appGet (req,res){

        conection.connect(err => {

            if(err) {
              console.error(err);
              return res.status(500).json({msg: 'Error de conexión a DB'}); 
            } 

          });

          try {
            
            const data = await createQuery('SELECT * FROM  equipo')

            res.json(data)
          } catch (error) {
            return res.json({msg:'Error con la db ',err:error})
          }

       

    }
}