import mongoose, {Schema} from "mongoose"

const photoSchema = new Schema({
  id: Number,
  image_url: String,
  nickname: String,
  profile_image_url: String,
})

const photo = mongoose.model("photo", photoSchema)

export default photo
