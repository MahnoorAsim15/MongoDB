var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Student:Bro45ther@cluster0.kdbuphw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Maju");
    dbo.collection("Student").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});