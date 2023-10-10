import express from 'express'
import {equiposRoutes} from './routes/app.routes.js'

const PORT = process.env.PORT ?? 3000
const app =express()


app.get('/',(req,res)=>{
    res.send('Api pelota ')
})

app.use('/api',equiposRoutes)

app.use((req,res)=>{

    res.status(404).send('404 Page not Found')
})


app.listen(PORT,()=>{
    console.log(`Server runing on http://localhost:${PORT}`);
})