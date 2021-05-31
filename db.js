const mongoose = require("mongoose");


const configure_db = async()=>{
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    useFindAndModify: true,
  });
  const conn = mongoose.connection;
  conn.on("error", (err) => {
    console.log(err);
  });
  conn.on("open", () => {
    console.log("Db is connected")
  });
  return db;
}



module.exports = configure_db;
