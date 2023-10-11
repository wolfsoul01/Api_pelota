import { Router } from 'express'
import { equipoControllers } from '../controllers/equipo.controllers.js'

export const equiposRoutes = Router()

equiposRoutes.get('/', equipoControllers.getAll)
