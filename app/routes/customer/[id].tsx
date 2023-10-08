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
          <div>
            <h1>Show</h1>
            <hr />
            id : {item.id}
            <hr />
            CompanyName: {item.CompanyName}
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
