export default defineEventHandler(
  async (event) => {
    const body = await readBody(event)
    if (body.token != process.env.update_token) {
      return {
        res: false
      }
    }
    else {
      return {
        auth: true
      }
    }
  }
);