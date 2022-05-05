import { rest } from "msw";

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      }])
    )
  }),
  // you can try post method like this..
  /* rest.post('https://jsonplaceholder.typicode.com/todos/', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        userId: 1,
        id: 11,
        title: "delectus aut autem",
        completed: false
      })
    )
  }) */
]