const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log('Connected to mongoDB successfully');
}).catch((e)=> {
    console.log('Erorr while attempting to connect mongoDB');
    console.log(e);
});


module.exports = {
    mongoose
};