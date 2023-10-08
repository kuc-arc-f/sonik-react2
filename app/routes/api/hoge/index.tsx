import { Hono } from 'hono'
const app = new Hono()
//
app.get('/', (c) => {

    //
    return c.json({
    'your name is': "hoge123",
    })
})
export default app