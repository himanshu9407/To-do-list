const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDBNew', {useNewUrlParser:true}, (err) => {
    
    if(!err)
        console.log('MongoDB Connected Succeeded.');
    else
        console.log('Error in Db Connection : ' + JSON.stringify(err, undefined, 2));   
});

module.exports = mongoose;