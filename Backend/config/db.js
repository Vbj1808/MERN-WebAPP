const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mernbook:mernbook@book-shard-00-00-atket.mongodb.net:27017,book-shard-00-01-atket.mongodb.net:27017,book-shard-00-02-atket.mongodb.net:27017/test?ssl=true&replicaSet=book-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err)
    }
});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDb database connected successfully");
})




module.exports = connection;