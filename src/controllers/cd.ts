import { Request, Response, NextFunction } from 'express'
import { collections } from '../../app/dbConnect'

const addCD = async (req: Request, res: Response) => {
  const data = req.body
  try {
    const newCD = await collections.cd?.insertOne(data)
    console.log(newCD)
    return res.status(200)
  } catch (err) {
    console.log(err)
    return null
  }
}

const allCDs = async (req: Request, res: Response) => {
  try {
    const allCDs = await collections.cd?.find({}).toArray()
    console.log(allCDs)
    return res.status(200).send(allCDs)
  } catch (err) {
    console.log(err)
    return null
  }
}

export default {
  addCD,
  allCDs,
}
