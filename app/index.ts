import { Application } from 'express'
import appSetup from './appSetup'
import appStart from './appStart'
import { dbConnect } from './dbConnect'

export default async (app: Application) => {
  await dbConnect()
  appSetup(app)
  appStart(app)
}
