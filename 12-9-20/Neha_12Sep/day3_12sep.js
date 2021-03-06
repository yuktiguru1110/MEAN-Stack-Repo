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
db.profile.insert({"UID":"102", "Name":"Henry", "Designation":"Student", "Location":"New York"})
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

