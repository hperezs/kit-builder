import { MongoClient } from 'mongodb'

export default async function logUserTraffic(req, res) {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    
    // Log visit
    const currentDate = new Date();
    let body = JSON.parse(req.body);

    let visitLog = {
        ...JSON.parse(body.userLog),
        timestamp: body.timeOfVisit,
    }

    const result = await client
            .db('traffic')
            .collection('visits')
            .insertOne(visitLog);

    console.log('Visit logged.');

    // Create / Update user record
    let userLog = {
        ...JSON.parse(body.userLog), 
        visitCount: 1,
        hasStarted: false,
        hasReachedReview: false,
        proceededToCart: false,
    };

    let cursor = await client
        .db('traffic')
        .collection('user-records')
        .find({"ipAddress": userLog.ipAddress});

    const searchedLog = await cursor.toArray();

    if (searchedLog.length) {
        console.log('Record found:');
        console.log(searchedLog);

        let newVisitCount = searchedLog[0].visitCount + 1;
        
        let result = await client
            .db('traffic')
            .collection('user-records')
            .updateOne({"ipAddress": userLog.ipAddress}, { $set: {visitCount: newVisitCount} });
        
            console.log('User log successfully edited')
        
            res.status(200).send('logged');
    } else {
        console.log("No record found.");
        const result = await client
            .db('traffic')
            .collection('user-records')
            .insertOne(userLog);
        
        console.log('First record sucessfully logged:');
        res.status(200).send('logged');
    }

    client.close();
}