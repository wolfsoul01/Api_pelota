import { Router } from 'express'
import { equipoControllers } from '../controllers/equipo.controllers.js'
import { newEquipValidate } from '../middlewares/EquipValidate.js'

export const equiposRoutes = Router()

equiposRoutes.get('/', equipoControllers.getAll)

equiposRoutes.post('/', [newEquipValidate], equipoControllers.create)
