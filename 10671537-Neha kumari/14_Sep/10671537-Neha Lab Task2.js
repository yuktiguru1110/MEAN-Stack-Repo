use neha

db.restaurants.insert([{
  "address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"},
  {
 "address": {
   "building": "8825",
   "coord": [-73.8803827, 40.7643124],
   "street": "Astoria Boulevard",
   "zipcode": "11369"
 },
 "borough": "Queens",
 "cuisine": "American",
 "grades": [ 
 {"date": {"$date": "2014-11-15T00:00:00.000Z"},"grade": "Z","score": 38},
 {"date": {"$date": "2014-05-02T00:00:00.000Z"},"grade": "A","score": 10},
 {"date": {"$date": "2013-03-02T00:00:00.000Z"},"grade": "A","score": 7},
 {"date": {"$date": "2012-02-10T00:00:00.000Z"},"grade": "A", "score": 13}],
   "name": "Brunos On The Boulevard",
   "restaurant_id": "40356151"
}])

db.restaurants.find({"name": /.*Reg.*/},{"restaurant_id""name":1,"borough":1,"cuisine" :1});

db.restaurants.find({"borough":"Bronx",$or:[{"cuisine":"American"},{"cuisine":"Chinese"}]});

db.restaurants.find({"borough":{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

db.restaurants.find({"borough":{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

db.restaurants.find({"grades.score" : { $not: {$gt : 10}}},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

db.restaurants.find({$or: [{name: /^Wil/}, {"$and": [{"cuisine" : {$ne :"American "}},{"cuisine" : {$ne :"Chinees"}}]}]},
{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

db.restaurants.find({"grades.date": ISODate("2014-08-11T00:00:00Z"),"grades.grade":"A" ,"grades.score" : 11}, 
{"restaurant_id" : 1,"name":1,"grades":1});

db.restaurants.find({"grades.1.date": ISODate("2014-08-11T00:00:00Z"),"grades.1.grade":"A""grades.1.score" : 9}, 
{"restaurant_id" : 1,"name":1,"grades":1});

db.restaurants.find({"address.coord.1": {$gt : 42, $lte : 52}},{"restaurant_id" : 1,"name":1,"address":1,"coord":1});

db.restaurants.find().sort({"name":1});


