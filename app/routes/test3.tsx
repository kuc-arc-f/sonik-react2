import type { Context } from 'sonik'
import { findAllCustomer } from '../db'
import dayjs from 'dayjs/esm'
//
export default async function Test3(c: Context) {
  try{
    const items = await findAllCustomer(c.env.DB);
//console.log(items);
    //
    return (
    <div className="container_base">
      <h1 className="text-4xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
        Test3
      </h1>
      <hr />      
      <hr />
      <label>custName:</label>
      <input type="text" id="title" className="input_text mx-2" />
      <hr />
      <button id="btn_save" className="btn">Save</button>
      <hr />
      <hr className="my-2" />
      <ul>
        {items.map((item) => (
          <li class="bg-white p-6 rounded-lg shadow-lg mb-4" key={item.id}>
            <a href={`customer/${item.id}`}>
              <h3 class="text-2xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
                {item.CompanyName}
              </h3>
              <span>ID: {item.id}, </span>
              <time class="text-gray-500 text-sm" dateTime={item.createdAt}>
                {dayjs(item.createdAt).fromNow()}
              </time>
            </a>
          </li>
        ))}
      </ul>      
      {/* JS  */}
      <script type='module' src="/static/js/test/TestIndex.js"></script>
    </div>
    )
  } catch (e) {
    console.error(e);
  }  
}
