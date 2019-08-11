export const photo = {
  Query: {
    photo: async (parent, args, {models}) => {
      console.log("models", models)
      const photos = await models.photo.find({}).lean().exec()
      console.log("photos", photos)
      return photos
    }
  }
}
