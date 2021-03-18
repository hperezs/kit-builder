import Mongo, { MongoClient } from 'mongodb'

export default async function getAllProducts(req, res) {
    const uri = "mongodb+srv://hperezs:MangoDB101@Note-taker-db.psry6.mongodb.net/Note-taker-db?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();

    let cursor = await client.db('backstreet-surveillance').collection('ip-cameras').find();
    const results = await cursor.toArray();
    res.status(200).json(results);

    client.close();
}