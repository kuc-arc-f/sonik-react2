import type { Context } from 'sonik'
import { findAllCustomer } from '../db'
//import dayjs from 'dayjs/esm'
//
export default async function Test2(c: Context) {
  try{
    const items = await findAllCustomer(c.env.DB);
//console.log(items);
    //
    return (<div>
      <h1>test2</h1>
      <hr />      
      <h2>
          Test: Hello 123 <a href='/about/me'>me</a>!
      </h2>
      <hr />
      <input type="text" id="title" />
      <hr />
      <button id="btn_save">[ Save ]</button>
      <hr />
      {/* JS  */}
      <script type='module' src="/static/js/test/TestIndex.js"></script>
    </div>
    )
  } catch (e) {
    console.error(e);
  }  
}
