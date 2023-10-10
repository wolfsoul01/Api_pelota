import {Router} from 'express'
import {equipoControllers} from '../controllers/app.controllers.js'



export const equiposRoutes= Router()

appRoutes.get('/',equipoControllers.getAll)