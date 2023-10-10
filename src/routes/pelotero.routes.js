import {Router} from 'express'
import {peloteroControllers} from '../controllers/pelotero.controller.js'
import {validatePlayerInfo} from '../middlewares/validatePlayer.js'


export const peloteroRoutes= Router()

peloteroRoutes.get('/',peloteroControllers.getAll)
peloteroRoutes.get('/:id',peloteroControllers.getById)

peloteroRoutes.post('/',[validatePlayerInfo],peloteroControllers.create)


