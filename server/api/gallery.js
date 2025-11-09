import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default cachedEventHandler(async (event) => {
  var res = await prisma.gallery.findMany()
  return res
}, {
  maxAge: 1
})
