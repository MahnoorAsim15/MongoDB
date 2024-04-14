var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Student:Bro45ther@cluster0.kdbuphw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var myobj = [
    { _id: 154, name: 'Chocolate Heaven'},
    { _id: 155, name: 'Tasty Lemon'},
    { _id: 156, name: 'Vanilla Dream'}
  ];
  dbo.collection("Student").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("More Data  inserted: " + res.insertedCount);
    db.close();
  });
});