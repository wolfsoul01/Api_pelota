import { validatePlayerZod } from '../Schema/pelotero.zod.js'

export function validatePlayerInfo (req, res, next) {
  const input = req.body

  const resul = validatePlayerZod(input)

  if (!resul.success) return res.json({ msg: 'Datos no validos ', error: resul.error })

  next()
}
