import { Router } from 'express'
import { peloteroControllers } from '../controllers/pelotero.controller.js'
import { validatePlayerInfo, validatePlayerInfoUpdate } from '../middlewares/PlayerValidate.js'

export const peloteroRoutes = Router()

peloteroRoutes.get('/', peloteroControllers.getAll)
peloteroRoutes.get('/:id', peloteroControllers.getById)

peloteroRoutes.post('/', [validatePlayerInfo], peloteroControllers.create)
peloteroRoutes.patch('/:id', [validatePlayerInfoUpdate], peloteroControllers.update)
peloteroRoutes.delete('/:id', peloteroControllers.delete)
