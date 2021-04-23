import { MongoClient } from 'mongodb'

export default async function logUserTraffic(req, res) {
    const uri = "mongodb+srv://jacob:backstreetdev@kit-builder-analytics.r70v5.mongodb.net/traffic?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await client.connect();
    
    // Log visit
    const currentDate = new Date();

    let visitLog = {
        ...JSON.parse(req.body),
        timestamp: currentDate.getTime()
    }

    const result = await client
            .db('traffic')
            .collection('visits')
            .insertOne(visitLog);

    console.log('Visit logged.');

    // Create / Update user record
    let userLog = {
        ...JSON.parse(req.body), 
        visitCount: 1
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
        console.log(newVisitCount);
        let result = await client.db('traffic').collection('user-records')
        .updateOne({"ipAddress": userLog.ipAddress}, { $set: {...userLog, visitCount: newVisitCount} });
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