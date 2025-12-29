import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default cachedEventHandler(async (event) => {
  const query = getQuery(event)
  const { number, byyear } = query;

  var res = null;
  if (number == null) {
    res = await prisma.publication.findMany();
  } else {
    res = await prisma.publication.findMany({
      take: parseInt(number),
      orderBy: {
        year: 'desc'
      }
    });
  }
  if (byyear == 1) {
    var paper_sort_by_year = [];
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      var target = paper_sort_by_year.find((item) => item.year == element.year);
      if (target == null) {
        target = {
          year: element.year,
          papers: [],
        };
        paper_sort_by_year.push(target);
      }

      target.papers.push(element);
    }
    paper_sort_by_year.sort((a, b) => b.year - a.year);
    return paper_sort_by_year;
  }
  else{
    return res
  }
}, {
  maxAge: Number(process.env.cache_time) * 60
});
