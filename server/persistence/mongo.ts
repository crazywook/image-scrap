import mongoose from "mongoose"

import {config} from "../config"

const {mongo} = config
if (!mongo) {
  throw new Error("mongo db config does not exist")
}

const uri = `mongodb+srv://${mongo.username}:${mongo.password}@resume-osj6d.mongodb.net/photoFeeds?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true })

const db = mongoose.connection

db.on("error", (err) => console.log("connection error: ", err))
db.once("open", async () => {
  console.log("mongodb.net/photoFeeds connection open")
})
