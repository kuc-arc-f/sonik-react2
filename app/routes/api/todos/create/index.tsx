import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
import type { Context } from '../../../../types'
const app = new Hono();
interface Env {
  DB: Database
}
//
app.post('/', async (c: Context) => { 
  const body = await c.req.json();
  if (body) {
    const sql = `
    INSERT INTO todos ( title, content)
    VALUES('${body.title}', '${body.content}');
    `;
console.log(sql);
    await c.env.DB.prepare(sql).run();
  }
  //
  return c.json({
    ret: "OK",
    data: body,
  })
})
export default app