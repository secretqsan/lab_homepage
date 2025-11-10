import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default cachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const { number, id } = query;

    var res = null;
    if (id == null) {
      if (number == null) {
        res = await prisma.news.findMany({
          select: {
            id: true,
            title: true,
            summary: true,
            image: true,
            category: true,
            date: true,
            content: false,
          },
          orderBy: {
            date: 'desc'
          }
        });
      } else {
        res = await prisma.news.findMany({
          take: parseInt(number),
          select: {
            id: true,
            title: true,
            summary: true,
            image: true,
            category: true,
            date: true,
            content: false,
          },
          orderBy: {
            date: 'desc'
          }
        });
      }
    }
    else{
      res = await prisma.news.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          title: true,
          summary: false,
          image: false,
          category: false,
          date: true,
          content: true,
        }
      })
    }
    return res;
  },
  {
    maxAge: 12* 60 * 60,
  }
);
