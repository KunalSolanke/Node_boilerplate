const mongoose  = require('mongoose')
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites:true,
    useFindAndModify:true
})

const db = mongoose.connection ;
db.on('error',(err)=>{
    console.log(err)
})
db.on('open',()=>{
    console.log('Db is connected')
})

module.exports = db 