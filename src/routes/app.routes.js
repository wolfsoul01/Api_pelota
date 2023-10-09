import {Router} from 'express'
import {appControllers} from '../controllers/app.controllers.js'
export const appRoutes= Router()

appRoutes.get('/',appControllers.appGet)