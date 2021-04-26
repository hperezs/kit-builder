import {MongoClient} from 'mongodb'

export default async function UpdateRecord(req, res) {
    const uri = "mongodb+srv://jacob:backstreetdev@kit-builder-analytics.r70v5.mongodb.net/traffic?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();

    if(req.query.step == 'start'){
        let result = await client
            .db('traffic')
            .collection('user-records')
            .updateOne({"ipAddress": req.query.ipAddress}, { $set: {hasStarted: true} })
        
        res.status(200).send('Review step reached.');
    }

    if(req.query.step == 'review'){
        let result = await client
            .db('traffic')
            .collection('user-records')
            .updateOne({"ipAddress": req.query.ipAddress}, { $set: {hasReachedReview: true} })
        
        res.status(200).send('Review step reached.');
    }
    
}