import { Application, json, urlencoded } from 'express'
import cors from 'cors'
import router from '../src/routes'

export default (app: Application) => {
  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // Initiate routes
  app.use('/', router)
}
