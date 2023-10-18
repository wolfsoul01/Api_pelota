import { equipValidateSchema } from '../Schema/equip.zod.js'

export function newEquipValidate (req, res, next) {
  const result = equipValidateSchema(req.body)

  if (!result.success) return res.status(401).json({ msj: 'Datos incorrectos ', err: result.error })

  next()
}
