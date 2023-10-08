import type { Context } from 'sonik'
import { findAllCustomer } from '../db'
import dayjs from 'dayjs/esm'
//import CustomerPageIndex from './customer/CustomerPageIndex';
//
const headValue = {
  title: 'test.tsx',
  link: [
    {
      rel: 'stylesheet',
      href: '/static/article.css'
    }
  ]
}
//
const JsCompo = function () {
  return (
    <div>
    <script type='module' src="/static/js/test.js"></script>
    </div>
  );
}
//
export default async function Test(c: Context) {
  try{
    const items = await findAllCustomer(c.env.DB);
//console.log(items);
    //
    const addItem = async function(){
      console.log("#addItem");
//      await CustomerPageIndex.addItem();
    }
    //
    return c.render(
      <div>
        <h2>
          Test: Hello 123 <a href='/about/me'>me</a>!
        </h2>
        <JsCompo />
        <hr />
        <label>custName:</label>
        <input type="text" id="title" />
        <button onClick="addItem();">Save</button>
        <hr className="my-2" />
        <ul>
          {items.map((item) => (
            <li class="bg-white p-6 rounded-lg shadow-lg mb-4" key={item.id}>
              <a href={`articles/${item.id}`}>
                <h3 class="text-2xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
                  {item.CompanyName}
                </h3>
                <time class="text-gray-500 text-sm" dateTime={item.createdAt}>
                  {dayjs(item.createdAt).fromNow()}
                </time>
              </a>
            </li>
          ))}
        </ul>
        {/* JS test.js */}
        <hr className="my-2" /> 
      </div>, 
      headValue
    )
  } catch (e) {
    console.error(e);
  }  
}
/*
<script type='module' src="/static/js/test.js"></script>
        <script type="module" src="/app/customer/CustomerPageIndex.ts"></script>       
<script src="/js/test.js"></script>
<script type="module" src="/app/customer/CustomerPageIndex.ts"></script>
      {
        title: 'Welcome to Sonik!',
        meta: [{ name: 'description', content: 'This an example for Sonik', key: 'Key' }],
      }

*/