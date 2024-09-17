import {Collection, MongoClient} from "mongodb";

export type ProductType = {
    id: number
    title: string
}

const mongoUri = process.env.mongoURI || "mongodb://0.0.0.0:27017"

export const client = new MongoClient(mongoUri)

const db = client.db("shop")
export const productsCollection: Collection<ProductType> = db.collection<ProductType>("products")

export const runDb = async () => {
    try {
        await client.connect()
        await client.db("products").command({ping: 1})
        console.log("Connected successfully to mongo server")
    } catch {
        await client.close()
        console.log("Can't connect to DB")
    }
}