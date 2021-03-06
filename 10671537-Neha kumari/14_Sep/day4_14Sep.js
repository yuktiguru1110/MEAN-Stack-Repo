show dbs
show databases
db
use neha
db
show tables
show collections
db.profile.find()
db.profile.find({})

db.profile.insert({"UID":"102", "Name":"Mark", "Designation":"Student", "Location":"Colarado"})
db.profile.insert({"UID":"103", "Name":"Henry", "Designation":"Student", "Location":"New York"})
db.profile.insert({"UID":"102", "Name":"Ted", "Designation":"Student", "Location":"New York"})

db.profile.update(
{"UID":"102"},
{$set: {"Name":"Jullian"}})

db.registration.insert({"RegNo":"102", "Name":"Sam", "Course":"JAVA", "Fees":"2000"})
db.registration.insert({"RegNo":"103", "Name":"Jason", "Course":"C++", "Fees":"3000"})
db.registration.insert({"RegNo":"104", "Name":"Jamy", "Course":"C", "Fees":"2500"})
db.registration.insert({"RegNo":"1025", "Name":"Mark", "Course":"DOTNET", "Fees":"3000"})

db.registration.find()

db.registration.update(
{ "Name": "Mark"},
{ $set:{"RegNo":"105"}},
{ multi:true})

db.registration.remove({"Fees":"2500"})

db.registration.update(
{ "Name": "Mark"},
{ $set:{"RegNo":"104"}},
{ multi:true})

db.registration.insertOne({"RegNo":"105", "Name":"Jenny", "Course":"DOTNET", "Fees":"3000"},
{"RegNo":"106", "Name":"Markus", "Course":"DOTNET", "Fees":"3000"})

db.registration.insertMany([{"RegNo":"106", "Name":"Bob", "Course":"DOTNET", "Fees":"3000"},
{"RegNo":"107", "Name":"Tom", "Course":"Angular", "Fees":"4000"},
{"RegNo":"108", "Name":"Feb", "Course":"Devops", "Fees":"3500"}])

db.profile.insert([{"UID":"105", "Name":"Jacob", "Designation":"Student", "Location":"New York"},
{"UID":"106", "Name":"Micheal", "Designation":"Student", "Location":"Texas"},
{"UID":"107", "Name":"Mary", "Designation":"Student", "Location":"New Jersy"}])

db.profile.find().pretty()

db.profile.find({"Name":"Jullian"})
db.profile.find({"Location":"New York"})




db.registration.find({ "Fees" :{$lt:"3000"}})

db.registration.find()

db.registration.update(
{ "Course": "MEAN"},
{ $set:{"Fees":"5000"}},
{ multi:true})

db.registration.remove({"Fees":"3500"})

db.registration.remove({})
db.registration.drop()

show collections
show tables

db.registration.insert([{"RegNo":"101", "Name":"Jan", "Course":"MEAN", "Fees":"3000"},
{"RegNo":"102", "Name":"Sam", "Course":"JAVA", "Fees":"2000"},
{"RegNo":"103", "Name":"Jason", "Course":"C++", "Fees":"3000"},
{"RegNo":"104", "Name":"Jamy", "Course":"C", "Fees":"2500"},
{"RegNo":"105", "Name":"Mark", "Course":"DOTNET", "Fees":"3000"},
{"RegNo":"106", "Name":"Bob", "Course":"DOTNET", "Fees":"3000"},
{"RegNo":"107", "Name":"Tom", "Course":"Angular", "Fees":"4000"},
{"RegNo":"108", "Name":"Feb", "Course":"Devops", "Fees":"3500"}])

db.registration.find({"Fees":{$gt :"2000"}})

db.registration.find({$and:[{"Fees":{$gt:"2000",$lt:"4000"}},{"Course":"JAVA"}]})

db.registration.aggregate([{
$group : {_id : "$Course", result: {$sum:1} } }]  )

db.registration.find({$and: [{Fees : { $lt : "4000" }},{Fees : { $gt : "2000" }},{Course : "DOTNET"}]})

db.registration.remove({"Course":"Devops"})
db.registration.find()

db.registration.find({"Course":{$in:["JAVA","DOTNET"]}},{"Course":1}).sort({"Fees":1})

db.registration.find({"Fees":{$gt:"2000"}},{"Course":1}).limit(3)


db.registration.aggregate([{
$group : {_id : null, count:{$sum:1}}}])


db.registration.find({"Course":"DOTNET"},{"Course":1,"Fees":1}).pretty()

db.registration.aggregate([{
$group : {_id : {"Course":"$Course","Fees":"$Fees"}, count:{$sum:1}}}],{allowDiskUse:true})

db.registration.aggregate([{ $match:{"Name":"Mark"}},
{$group : {_id : {"Course":"$Course","Fees":"$Fees"}, count:{$sum:1}}}],{allowDiskUse:true})

db.registration.distinct("Course")

db.profile.deleteOne({"Location":"New York"})
db.profile.deleteMany({"Location":"New York"})
db.profile.deleteOne({})
db.profile.deleteOne({$and:[{"Location":"New Jersy"},{"Name":"Mary"}]})
db.profile.find()
db.profile.deleteMany({})
db.registration.find({})
db.registration.updateOne({"RegNo":"101"},{$set:{"Fees":"40000"}})
db.registration.updateMany({},{$inc:{"Fees":1000}})
db.registration.update({"Course":"JAVA"},{$mul:{"Fees":1.1}})

use person

 db.person.insertMany( [
 { _id : "1001", name: "Franklin Roosevelt", quote: "More than just an end to war, we want an end to the beginnings of all wars." },
 { _id : "1002", name: "peter Dale Scott", quote:"I guess that when you invade a nation of warlords, you end up having to deal with warlords." },
 { _id : "1003", name: "Robert E. Lee", quote: "What a cruel thing war is... to fill our hearts with hatred instead of love for our neighbors."},
 { _id : "1004", name: "William Tecumseh Sherman", quote : "War is cruelty. There is no use trying to reform it. The crueler it is, the sooner it will be over." }
 ] );  
  
db.person.find().pretty();
​  
db.person.createIndex({"quote":"text"})

db.person.find( { $text: { $search: "war" } } ).pretty();

db.registration.createIndex({RegNo:1})
db.registration.getIndexes()
db.registration.createIndex({RegNo:1,Name:1})
db.registration.dropIndex({RegNo:1})
db.registration.dropIndex({RegNo:1,Name:1})

for(i=0;i<1000;++i)
{
    db.mypost.insert({"student_id":i,"Name":"Jai"});
}
db.mypost.find({})
db.mypost.find({"student_id":999})
db.mypost.findOne({"student_id":999})
db.mypost.createIndex({"student_id":1})

db.registration.find().sort({"RegNo":1,"Name":1})

db.user.insert({"contact":"1122334455", "dod":"01-12-1997", "gender":"M", "name":"Raj","user_name":"raj_123"})
db.user.find()
db.user.ensureIndex({gender:1,user_name:1})
db.user.find({gender:"M"},{user_name:1,_id:0}).explain()

db.registration.updateMany({},{$set:{join_date: new Date()}})
db.registration.updateMany({},{$unset:{join_date:""}})
db.registration.find({})
db.registration.find({Name:{$not:/on/}})
db.registration.find({Name:/on/})
db.registration.find().count()
db.registration.count()
db.registration.find({Fees:{$gt: 8000}}).count()

var emp=db.mypost.find({student_id:{$gt:900}});
while(emp.hasNext())
{
    print(tojson((emp.next())));
}

db.orders.insert([
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 3  }
])


