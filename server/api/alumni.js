import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default cachedEventHandler(async (event) => {
  var res = await prisma.alumni.findMany(
    {
      orderBy: {
        graduateYear: 'desc'
      }
    }
  )
  return res
}, {
  maxAge: 12* 60 * 60
})
