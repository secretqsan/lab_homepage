export default defineEventHandler(
  async (event) => {
    const body = await readBody(event)
    if (body.password != process.env.update_password) {
      return {
        token: ""
      }
    }
    else {
      return {
        token: process.env.update_token
      }
    }
  }
);
