import { findArticleById } from '../../db'
import type { Context } from '../../types'
import { parseMarkdown } from '../../utils'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
import PageShow from './PageShow';
dayjs.extend(relativeTime)
//
export default async function CutomerShow(c: Context) {
    try {
        const id = c.req.param('id');
console.log(id);
        const item = await PageShow.get(c.env.DB, id);
console.log(item);
        //
        return (
          <div className="container_base pt-2 pb-4 todo_show_wrap">
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <hr className="my-2" />
            id : {item.id} , {item.createdAt}
            <hr className="my-2" />
            <pre className="pre_text">{item.content}</pre>            
            <hr className="my-2" />
            <button id="btn_delete" className="btn-red ms-2">Delete</button>
            <hr />
            {/* JS  */}
            <script>const ItemId = {item.id};
            </script>
            <script src="/static/js/todos/TosoShow.js"></script>
            {/* CSS */}
            <style>{`
            .todo_show_wrap .pre_text {
              border: 1px solid #000;
              background: #eee;
              padding: 10px;
              font-family: BlinkMacSystemFont !important;
              font-size: 1rem;
            }            
            `}</style>
          </div>
        );
    } catch (e) {
        console.error(e);
    } 
/*
  if (!article) {
    return c.notFound()
  }
*/

}
