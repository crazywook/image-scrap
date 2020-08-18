import { Resolvers } from "apollo-boost"

export const photo: Resolvers = {
  Query: {
    photo: async (parent, args, {models}) => {

      const photos = await models.photo.find({}).lean().exec()
      return photos
    },
    photoById: async (parent, args, {models}) => {
      const photos = await models.photo.find({
        id: args[0]
      })
      return photos
    }
  },
  Mutation: {
    createPhoto: async (parent, { id, url }, {models}) => {

      const photoModel = new models.photo({
        id,
        nickname: "고양이지킴이2",
        image_url: url,
        profile_image: "https://i.pinimg.com/564x/f9/0a/4e/f90a4ee3d2c27854f9b535020a7f00aa.jpg",
      })
      const result = await photoModel.save()
      console.log("result", result)
      return result
    }
  }
}
