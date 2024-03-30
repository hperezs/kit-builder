import { MongoClient } from "mongodb";

export default async function UpdateRecord(req, res) {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  if (req.query.step == "start") {
    let result = await client
      .db("traffic")
      .collection("user-records")
      .updateOne(
        { ipAddress: req.query.ipAddress },
        { $set: { hasStarted: true } },
      );

    console.log("Builder started");
    res.status(200).send("Builder started.");
  }

  if (req.query.step == "review") {
    let result = await client
      .db("traffic")
      .collection("user-records")
      .updateOne(
        { ipAddress: req.query.ipAddress },
        { $set: { hasReachedReview: true } },
      );

    console.log("Customer reached review step.");
    res.status(200).send("Review step reached.");
  }

  if (req.query.step == "end") {
    let result = await client
      .db("traffic")
      .collection("user-records")
      .updateOne(
        { ipAddress: req.query.ipAddress },
        { $set: { proceededToCart: true } },
      );

    console.log("Customer proceeded to cart.");
    res.status(200).send("Proceeded to cart.");
  }
}
