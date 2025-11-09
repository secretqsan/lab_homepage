import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(
  async (event) => {
    const body = await readBody(event)
    const headers = getHeaders(event)
    const token = headers.authorization
    if (token != 'GA5g3n*ijnnY5FFbhsd') {
      throw createError({
        code: 401,
        message: '未授权'
      })
    }
    const article = await prisma.publication.findFirst({
      where: {
        doi: body.doi
      }
    })
    if (article != null) {
      return {
        code: 200,
        message: '文章已存在'
      }
    }
    var res = await prisma.publication.create({
      data: body
    })
    if (res.code == 200) {
      return {
        code: 200,
      }
    }
    else {
      throw createError({
        code: 500,
      })
    }
  }
);
