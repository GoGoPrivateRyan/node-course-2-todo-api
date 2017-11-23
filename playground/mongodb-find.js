//const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected o MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a162461dba4e104786f124a')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos counts: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Ryan Tseng'}).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
