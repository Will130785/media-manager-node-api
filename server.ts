import dotEnv from 'dotenv'
import express from 'express'
const { NODE_ENV } = process.env

const path = NODE_ENV === 'production' ? '.env' : `.env.${NODE_ENV}`

dotEnv.config({
  path,
})

const app = express()
import application from './app/index'

application(app)
