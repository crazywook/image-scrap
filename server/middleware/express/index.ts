import cors from "cors"
import express from "express"

import * as corsOption from "./cors.json"

const app = express()
app.use(cors(corsOption))

export default app
