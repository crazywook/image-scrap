import mongoose from "mongoose"

import {config} from "../config"

const {mongo} = config
if (!mongo) {
  throw new Error("mongo db config does not exist")
}

const uri = `mongodb+srv://${mongo.username}:${mongo.password}@resume-osj6d.mongodb.net/photoFeeds?retryWrites=true&w=majority`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export const db = mongoose.connection

export function disconnect() {
  db.close()
}

db.on("error", err => console.log("connection error: ", err))
db.on("close", () => console.log("mongodb closed"))
db.once("open", async () => {
  console.log("mongodb.net/photoFeeds connection open")
})
