import "./persistence/mongo"

import apolloServer from "./middleware/apollo"
import app from "./middleware/express"

apolloServer.applyMiddleware({ app })

const port = process.env.PORT || 4000

app.listen({ port }, () => {
  console.log(`Server listen at port ${port}`)
})
