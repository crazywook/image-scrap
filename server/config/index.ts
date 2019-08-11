import {development} from "./development"

export interface Config {
  mongo?: {
    username: string
    password: string
  }
}

export const config = development
