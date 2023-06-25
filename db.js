const { MongoClient } = require('mongodb');

const DATABASE_URL = "mongodb+srv://siva:I5Wf5MkhwLdratpV@cluster0.lfr3l7d.mongodb.net/?retryWrites=true&w=majority"
const DatabaseName = "deepthought";


let client = null;
let db = null;

const connect = async () => {
  try {
    client = await MongoClient.connect(DATABASE_URL);
    db = client.db(DatabaseName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  finally{
   
  }
};

const getClient = () => client;
const getDb = () => db;

module.exports = { connect, getClient, getDb };
