use test
db.restaurants.find({name: /.*Reg.*/},{restaurant_id:1,name:1,borough:1,cuisine:1})

db.restaurants.find(
{borough:"Bronx", 
    $and :[{cuisine:{$ne:"American",$ne:"Chinese"}}]})
    
db.restaurants.find(
{borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},
{restaurant_id:1,name:1,borough:1,cuisine:1})

db.restaurants.find(
{borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},
{restaurant_id:1,name:1,borough:1,cuisine:1})

db.restaurants.find({grade.score:{$lt:10}},{restaurant_id:1,name:1,borough:1,cuisine:1})

db.restaurants.find(
{$or: [
  {name: /^Wil/}, 
  {"$and": [
       {"cuisine" : {$ne :"American",$ne :"Chinees"}}, 
   ]}
]}
db.restaurants.find(
{$or: [
  {name: /^Wil/}, 
  {"$and": [
       {"cuisine" : {$ne :"American "}}, 
       {"cuisine" : {$ne :"Chinees"}}
   ]}
]}
,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}
);
);

db.restaurants.find( 
                {
                 "grades.date": ISODate("2014-08-11T00:00:00Z"), 
                 "grades.grade":"A" , 
                 "grades.score" : 11
                }, 
                {"restaurant_id" : 1,"name":1,"grades":1}
             );
             
db.restaurants.find( 
                {
                 "grades.1.date": ISODate("2014-08-11T00:00:00Z"), 
                 "grades.1.grade":"A" , 
                 "grades.1.score" : 11
                }, 
                {"restaurant_id" : 1,"name":1,"grades":1}
             );
          
db.restaurants.find({"address.coord.1":{$gt:42,$lte:52}},
{"restaurant_id" : 1,"name":1,"address":1,"coord":1})
 
db.restaurants.find().sort({"name":1});

