import { expect } from "chai"
import { disconnect } from "mongoose"
import Photo from "."
import { db } from "../../persistence/mongo"
// import "../../persistence/mongo"

describe("photo.test", () => {

  // afterEach("after", async () => {

  //   db.on("close", err => {
  //     err && console.error(err)
  //     console.log("db closed")
  //   })
  //   console.log("after")
  //   await disconnect()
  // })
  // after("after", (done) => {
  //   console.log("after test")
  //   done()
  // })

  it("when photo find, then result array length is 20", async () => {

    const result = await Photo.find({}).lean().exec()

    expect(result).to.a.instanceOf(Array)
    console.log("expected")
  }).timeout(7000)

  it("Given id, can find by id", async () => {
    const result = await Photo.find({ id: 591920 })
    console.log("result", result)
    expect(result[0].id).to.equals(591920)
  }).timeout(5000)

  it("insert some data", async () => {
    const photo = new Photo({
      image_url: "https://lh3.googleusercontent.com/proxy/Rb-jREVZkAAJaf8zyKFnvINdmtD-J6wppCaOfE_P61TPz_8h0OpUra9MzQX0GBG81tYU8en2ahYIRjIwji4uP8qDOX8-yeDOqllWQFvo77-Hg_XhPg",
      nickname: "고양이지킴이",
      profile_image: "https://i.pinimg.com/564x/f9/0a/4e/f90a4ee3d2c27854f9b535020a7f00aa.jpg",
    })
    const result = await photo.save()
    expect(result._id).to.equal(photo._id)
  })
})
