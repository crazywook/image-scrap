import {gql} from "apollo-server-express"

export const typeDefs = gql`

  type Photo {
    id: Int
    image_url: String
    nickname: String
    profile_image_url: String
  }

  type Query {
    photo: [Photo]
  }
`
