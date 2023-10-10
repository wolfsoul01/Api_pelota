import {Router} from 'express'
import {peloteroControllers} from '../controllers/pelotero.controller.js'



export const peloteroRoutes= Router()

peloteroRoutes.get('/',peloteroControllers.getAll)