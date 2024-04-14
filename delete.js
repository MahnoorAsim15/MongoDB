var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Student:Bro45ther@cluster0.kdbuphw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var myquery = { address: 'sp22bscs0124' };
  dbo.collection("Student").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("deleted data");
    db.close();
  });
});