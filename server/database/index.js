import { MongoClient } from 'mongodb'
import { dev } from '../..'

export default class DataBase {
    constructor() {
        this.dbName = 'w-commerce'
        this.url = dev ? `mongodb://localhost:27017/${this.dbName}` : `mongodb://${process.env.MONGO_DB_HOST}:27017/${this.dbName}`
        this.client = new MongoClient(this.url, { useNewUrlParser: true })
        this.db = null
    }

    async init() {
        await this.client.connect()
        this.db = this.client.db(this.dbName)
    }
}