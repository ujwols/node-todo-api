const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection("Todos").find().toArray().then( (docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs,undefined,2));

  // }, (err) => {
  //   console.log("Unable to fetch docs",err);
  // });

  // db.collection("Todos").find({completed:true}).toArray().then( (docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs,undefined,2));

  // }, (err) => {
  //   console.log("Unable to fetch docs",err);
  // });

  // db.collection("Todos").find().count().then( (count,err) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch docs",err);
  // });

  // db.collection("Todos").find().count(function(err,count){
  //   console.log(`Document count : ${count}`);
  // });

  db.collection("Users").find({name:"Kelly"}).count().then( (count,err) => {
    console.log(`Count of Ujwol : ${count}`);

  }, (err) => {
    console.log("Unable to find user Ujwol");
  });

  db.close();
});
