import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default cachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const { number } = query;
    var res = null;
    if (number == null) {
      res = await prisma.researchDirection.findMany({
        include: {
          projects: true
        },
        orderBy: {
          id: 'asc'
        }
      });
    } else {
      res = await prisma.researchDirection.findMany({
        take: parseInt(number),
        include: {
          projects: true
        },
        orderBy: {
          id: 'asc'
        }
      });
    }
    return res;
  },
  {
    maxAge: Number(process.env.cache_time) * 60,
  }
);
