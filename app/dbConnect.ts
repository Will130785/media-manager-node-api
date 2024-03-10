import * as mongoDB from 'mongodb'
import { ICollection } from '../src/types/mongo'
const {
  env: {
    CUSTOM_DB_CONNECT,
    CUSTOM_DB_NAME,
    CUSTOM_MONGO_COLLECTION_BLURAY,
    CUSTOM_MONGO_COLLECTION_CD,
    APP_NAME,
  },
} = process

export const collections: ICollection = {}

export const dbConnect = async (): Promise<mongoDB.MongoClient> => {
  // Create mongo client instance
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    CUSTOM_DB_CONNECT ?? ''
  )
  // Connect to client
  await client.connect()
  // Connect to DB
  const db: mongoDB.Db = client.db(CUSTOM_DB_NAME)
  // Create collection - Add any collections below
  const blurayCollection: mongoDB.Collection = db.collection(
    CUSTOM_MONGO_COLLECTION_BLURAY ?? ''
  )
  const cdCollection: mongoDB.Collection = db.collection(
    CUSTOM_MONGO_COLLECTION_CD ?? ''
  )
  // Set on collections object that will be exported - add all collections to the collections object
  collections.bluray = blurayCollection
  collections.cd = cdCollection

  console.log(
    `${APP_NAME}: Connected to mongoDB ${CUSTOM_DB_CONNECT}/${CUSTOM_DB_NAME}`
  )
  // Return client so we can access connection from outside this function if needed
  return client
}
