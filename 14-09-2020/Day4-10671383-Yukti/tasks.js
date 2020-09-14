use test
db.profile.deleteOne({"Location":"New York"})
db.profile.deleteMany({"Location":"New York"})
db.profile.deleteOne({})
db.profile.deleteOne({$and:[{"Location":"New Jersy"},{"Name":"Mary"}]})
db.profile.find()
db.profile.deleteMany({})

use test
db.profile.find()
db.registration.find()
db.registration.update({Regno:1},{$set:{fees:5000}})
db.registration.update({},{$inc:{fees:1000}})
db.registration.update({course:mean},{$inc:{fees%:10}})

use test
db.person.insertMany( [
 { _id : "1001", name: "Franklin Roosevelt", quote: "More than just an end to war, we want an end to the beginnings of all wars." },
 { _id : "1002", name: "peter Dale Scott", quote:"I guess that when you invade a nation of warlords, you end up having to deal with warlords." },
 { _id : "1003", name: "Robert E. Lee", quote: "What a cruel thing war is... to fill our hearts with hatred instead of love for our neighbors."},
 { _id : "1004", name: "William Tecumseh Sherman", quote : "War is cruelty. There is no use trying to reform it. The crueler it is, the sooner it will be over." }
 ] );
 
 db.person.find().pretty();
 db.person.createIndex({quote:"text"})
 db.person.find( { $text: { $search: "war" } } ).pretty();
 
 db.profile.find()
 db.profile.getIndexes()
 db.profile.createIndex({Uid:1})
 db.profile.ensureIndex({name:1,designation:1})
 db.profile.dropIndex({name:1,designation:1})
 
 use test
 for( i=0;i<1000;i++){
     db.mypost.insert({studentId:1,Name:"Raj"});}
     
 db.mypost.find()
 db.mypost.find({studentId:100})
 db.registration.createIndex({Regno:1})
 db.getCollection("profile").find({})
 
 db.profile.find({Uid:1}).explain()