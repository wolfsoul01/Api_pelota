import express from 'express'
import {equiposRoutes} from './routes/equipo.routes.js'
import { peloteroRoutes } from './routes/pelotero.routes.js'

const PORT = process.env.PORT ?? 3000
const app =express()

app.use(express.json())
app.disable('x-powered-by')

app.get('/',(req,res)=>{
    res.send('Api pelota ')
})


app.use('/api/equipo',equiposRoutes)
app.use('/api/pelotero',peloteroRoutes)



app.use((req,res)=>{

    res.status(404).send('404 Page not Found')
})


app.listen(PORT,()=>{
    console.log(`Server runing on http://localhost:${PORT}`);
})