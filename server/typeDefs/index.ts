import {gql} from "apollo-server-express"

export const typeDefs = gql`

  type Photo {
    id(id: Int): Int
    image_url: String
    nickname: String
    profile_image_url: String
  }

  type Query {
    photo: [Photo]
    photoById(id: Int): [Photo]
  }

  type Mutation {
    createPhoto(id: Int, url: String): Photo
  }
`
