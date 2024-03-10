import { Application } from 'express'

export default (app: Application) => {
  app.listen(3000, () => {
    console.log(`App started on port 3000`)
  })
}
