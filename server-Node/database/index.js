const mongoose = require('mongoose');
  require('dotenv/config');
mongoose.Promise = require('bluebird');

mongoose.connect(process.env.DB_CONNECTION,{dbName :'poojan', 
 useNewUrlParser: true, useUnifiedTopology:true})
 .then(()=>console.log("DB connected successfully."))
 .catch(err=> console.log("Error "+ err));
