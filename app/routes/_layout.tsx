import type { LayoutHandler } from '@sonikjs/preact'

const handler: LayoutHandler = ({ children, head }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.PROD ? (
          <>
            <link href="/static/style.css" rel="stylesheet" />
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <link href="/app/style.css" rel="stylesheet" />
            <script type="module" src="/app/client.ts"></script>
          </>
        )}
        <link href="/static/styles/globals.css" rel="stylesheet" />
        {head.createTags()}
      </head>
      <body className="bg-gray-200">
        {/* navi */}
        <div className="text-center pt-2" >
          <a href="/">[Top]</a>
          {/* <a href="/test"> [ Test ]</a> 
          <a href="/test3"> [ Test3 ]</a>
          */}
          <a href="/todos"> [ Todos ]</a>
          <hr />
        </div>
        <div className="h-screen">{children}</div>
      </body>
    </html>
  )
}

export default handler
/*
className="bg-gray-200 h-screen"
*/
