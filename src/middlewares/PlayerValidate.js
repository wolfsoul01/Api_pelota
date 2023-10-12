import { validatePlayerZod, validatePartialPlayerZod } from '../Schema/pelotero.zod.js'

export function validatePlayerInfo (req, res, next) {
  const input = req.body

  const resul = validatePlayerZod(input)

  if (!resul.success) return res.json({ msg: 'Datos no validos ', error: resul.error })

  next()
}
export function validatePlayerInfoUpdate (req, res, next) {
  const input = req.body

  const resul = validatePartialPlayerZod(input)

  if (!resul.success) return res.json({ msg: 'Datos no validos ', error: resul.error })

  next()
}
