db
use test
show dbs
db.createCollection('profile')
show collections
db.profile.insert({
    Uid:'1001',
    name:'yukti',
    designation:'student',
    location:'india'}
   )
db.profile.insert({
    Uid:'1002',
    name:'noname',
    designation:'works',
    location:'world'})   
db.createCollection('registration')
db.registration.insertMany([{
    Regno:1,
    name:"bhj",
    course:"abc",
    fees:500},
    {
        Regno:2,
    name:"bkj",
    course:"fghjc",
    fees:400}])
    