import type { Context } from 'sonik'
import PageIndex from './todos/PageIndex'
import dayjs from 'dayjs/esm'
//
export default async function Todos(c: Context) {
  try{
    const items = await PageIndex.getList(c.env.DB)
console.log(items);
    //
    return (
    <div>
      <h1 className="text-4xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
        Todos
      </h1>
      <hr />      
      <hr />
      <label>Title:</label>
      <input type="text" id="title" className="mx-2" />
      <hr />
      <label>Content:</label>
      <textarea id="content"></textarea>
      <hr />
      <button id="btn_save">[ Save ]</button>
      <hr />
      <hr className="my-2" />
      <ul>
        {items.map((item) => (
          <li class="bg-white p-6 rounded-lg shadow-lg mb-4" key={item.id}>
            <a href={`todos/${item.id}`}>
              <h3 class="text-2xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
                {item.title}
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
      <script type='module' src="/static/js/todos/TosoIndex.js"></script>
    </div>
    )
  } catch (e) {
    console.error(e);
  }  
}
