use test
db.restaurants.insert({"address":{
        "building":"1007",
        "coord":[-73.856077,40.848447],
        "street":"Morris Park Ave",
        "zipcode":"10462"
    },
    "borough":"Bronx",
    "cuisine":"Bakery",
    "grades":[
    {"date":{"$date":1393804800000},"grade":"A","score":2},
    {"date":{"$date":1378857600000},"grade":"A","score":6},
    {"date":{"$date":1358985600000},"grade":"A","score":10},
    {"date":{"$date":1322006400000},"grade":"A","score":9},
    {"date":{"$date":1299715200000},"grade":"B","score":14}
    ],
    "name":"Morris Park Bake Shop",
    "restaurant_id":"30075445"
})
show collections
db.restaurants.find()
db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1})
db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1,_id:0})
db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"address.zipcode" :1,"_id":0})
db.restaurants.find({"borough":"Bronx"})
db.restaurants.find({"borough":"Bronx"}).limit(5)
db.restaurants.find({"borough":"Bronx"}).skip(5).limit(5)
db.restaurants.find({grades:{$elemMatch:{score: {$gt:90}}}})
db.restaurants.find({grades:{$elemMatch: {score:{$gt:80,$lt:100}}}})
db.restaurants.find({"address.coord" : {$lt : -95.754168}});
db.restaurants.find({$and:[{cuisine:{$ne:American}},{grades.score:{$gt:90}},{address.coord:{$lt:-65.744168}}]})
db.restaurants.find({"cuisine" : {$ne : "American "},
"grades.score" :{$gt: 70},
"address.coord" : {$lt : -65.754168}
});
db.restaurants.find( {
                             "cuisine" : {$ne : "American "},
                             "grades.grade" :"A",
                             "borough": {$ne : "Brooklyn"}
                       } 
                    ).sort({"cuisine":-1})
                    
db.restaurants.find(
{name: /^Wil/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
)
db.restaurants.find(
{name: /ces$/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);