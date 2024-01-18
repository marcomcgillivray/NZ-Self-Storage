const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');


dotenv.config({ path: './config.env' });



const uri = `mongodb+srv://marcomcgillivray0:${process.env.PASSWORD}@cluster0.yb1p4hf.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

mongoose.connect(uri, {})
.then(() => {
  console.log('Connection Success!');
}).catch(err => console.log(err.reason));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});