import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default cachedEventHandler(async (event) => {
  const query = getQuery(event)
  const { number } = query
  var res = null
  if (number == null){
    res = await prisma.faculty.findMany()
  }
  else{
    res = await prisma.faculty.findMany({
      take: parseInt(number),
    })
  }
  return res
}, {
  maxAge: 12 * 60 * 60
})
