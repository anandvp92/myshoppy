const mongoose = require('mongoose')




let url = "mongodb://127.0.0.1:27017/test"

let db = async()=>{
  await mongoose.connect(url);
  const db = mongoose.connection;
  db.once('open',()=>{
    console.log("connected");
  })
}

