show databases
show dbs
db
use test
show tables
show collections
db.registration.find()
db.profile.find({})
db.profile.insertOne({
    Uid: 1005,
    name: "sd",
    designation: "labour",
    location: "chile"
})

db.registration.insertMany([{
    Regno: 3,
    name: "dhbfg",
    course: "mongo",
    fees:650
},
{
    Regno: 4,
    name:"xdft",
    course:"sql",
    fees: 520
}])

db.registration.insert([{
    Regno: 7,
    name: "vbhg",
    course: "csharp",
    fees:300
},
{
    Regno: 6,
    name:"xdft",
    course:"react",
    fees: 650
}])


db.registration.update({
    fees:{ $gt:400}
},
{
    $set:{course:'mean'}
},{
    multi:true
})

db.registration.update({fees :600},{$set: {fees:1000}})

db.profile.find({
    location:"chile"})
    
db.registration.find({
    fees : {$lt :500}})


dp.createCollection('del')
db.del.insert({
    name:"bh"})
    
db.del.remove({})
db.del.drop()

db.registration.find({$and: [{fees: {$gt : 400,$lt:600}},{course:"mean"}]})

db.registration.find({$and: [{$range:[400,600,100]},{course:"mean"}]})

db.registration.aggregate(
[
{
$group:{_id:"$name",result:{$sum:1}}
}
]);

db.new.insert({
    name:"gjeq"})
db.profile.remove({name:""})

db.registration.find({
    course:{
        $in:["angular","react"]}
},{course:1}).sort({course:1})

db.registration.find({fees: {$gt:400}},{name:1,course:1}).limit(3)
db.registration.aggregate([{$group:{_id:null,count:{$sum:1}}}])
db.profile.find({"data":"12/5/2011"},{Data:1})
db.profile.find({Uid:1})