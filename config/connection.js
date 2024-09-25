const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "Shopping";

const main = async () => {
  await client.connect();
  console.log("Db is connected");

  const db = client.db(dbName);
  const collection = db.collection("Users");
  return "Done.";
};

main().then(console.log).catch(console.error).finally(client.close());
