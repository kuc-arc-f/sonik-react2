import type { Context } from '../types'
//import { findAllArticles } from '../db'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
dayjs.extend(relativeTime)

const title = 'welcome';

export default async function Index(c: Context) {
  //
  return c.render(
    <div class="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col">
      <h1 class="font-extrabold text-5xl text-gray-800">{title}</h1>
    </div>,
    {
      title
    }
  )
}
