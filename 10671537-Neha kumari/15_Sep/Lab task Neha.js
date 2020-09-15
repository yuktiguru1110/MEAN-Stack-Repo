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

1. Write a MongoDB query to arrange the name of the restaurants in descending
along with all the columns

db.restaurants.find().sort({"name":-1});

2. Write a MongoDB query to arranged the name of the cuisine in ascending
order and for that same cuisine borough should be in descending order.

db.restaurants.find().sort({"cuisine":1,"borough" : -1,});

3. Write a MongoDB query to know whether all the addresses contains thestreet or not.

db.restaurants.find({"address.street" :{ $exists : true }});

4. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.

db.restaurants.find({"address.coord" :{$type : 1}});

5. Write a MongoDB query which will select the restaurant Id,
 name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7. 
 
 db.restaurants.find({"grades.score" :{$mod : [7,0]}},{"restaurant_id" : 1,"name":1,"grades":1});
 
 6. Write a MongoDB query to find the restaurant name, borough,longitude and attitude and 
 cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
 
 db.restaurants.find({ name :{ $regex : "mon.*", $options: "i" }},
 {
     "name":1,
     "borough":1,
    "address.coord":1,
   "cuisine" :1 });
 
 7. Write a MongoDB query to find the restaurant name, borough,
  longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.
  
  db.restaurants.find(
{ name : { $regex : /^Mad/i, }},
 {
   "name":1,
   "borough":1,
   "address.coord":1,
     "cuisine" :1});
  