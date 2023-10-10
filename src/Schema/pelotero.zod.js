import z from 'zod'

const playerSchema= z.object({
    nombre:z.string(),
    edad:z.number().int().min(18,{message:'La eda minima es 18 '}).max(80),
    exp:z.number().int().min(0).default(0),
    promBat:z.number().min(0).max(10).default(0)
})

export function validatePlayerZod(player){

    return playerSchema.safeParse(player)
}