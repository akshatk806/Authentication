const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ManAuth-Practice', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We are connected with database")
});

module.exports=db;

