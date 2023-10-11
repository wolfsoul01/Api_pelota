import z from 'zod'

const equipSchema = z.object({
  nameEquip: z.string(),
  init: z.string().max(4),
  equipDir: z.string(),
  color: z.string()
})

export function equipValidateSchema (equip) {
  return equipSchema.safeParse(equip)
}
