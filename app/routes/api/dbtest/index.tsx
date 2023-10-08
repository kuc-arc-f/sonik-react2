import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
import type { Context } from '../../../types'
const app = new Hono()
interface Env {
    DB: Database
}
//
app.get('/', async (c: Context) => {
    console.log(c.env);
    const { results } = await c.env.DB.prepare(`SELECT * FROM Customers ORDER BY id DESC`
    ).all();
console.log(results);
    return c.json({
        msg: "dbtest", data: results,
    })
})
export default app