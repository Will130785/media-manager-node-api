import mongodb from 'mongodb'

export interface ICollection {
  bluray?: mongodb.Collection
  cd?: mongodb.Collection
}
