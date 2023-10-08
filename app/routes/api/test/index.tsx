import { Hono } from 'hono'
const app = new Hono()
//
app.post('/', async (c) => {
  const body = await c.req.json();
  return c.json({
    data: body,
  })
})
export default app