//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
name: String,
rating: Number,
review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Preety Good."
});


const kiwi = new Fruit({
name: "Kiwi",
rating:10,
review: "The best fruit!"
});

const orange = new Fruit({
name: "Orange",
rating:4,
review: "Sour in taste!"
});

const banana = new Fruit({
name: "Banana",
rating:3,
review: "Good Texture!"
});

//
// Fruit.insertMany([kiwi,orange,banana],function(err){
// if(err){
//   console.log(err);
// }else{
//   console.log("Sucessfully Added");
// }
// });

Fruit.find(function(err,fruits){
if(err){
  console.log(err);
}else{
  console.log(fruits);
fruits.forEach(function(fruit){
console.log(fruit.name);
});


}


});







const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);

  });
};
