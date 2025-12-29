import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default cachedEventHandler(async (event) => {
  var res = await prisma.student.findMany()
  return res
}, {
  maxAge: Number(process.env.cache_time) * 60
})
