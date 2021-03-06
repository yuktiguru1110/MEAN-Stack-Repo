db.restaurants.find().sort({name:-1})

db.restaurants.find().sort({cuisine:1,borough:-1})

db.restaurants.find({"address.street":{$exists:true}})

db.restaurants.find({"address.coord":{$type:1}})

db.restaurants.find({grades.score:{$mod:[7,0]}},{restaurant_id:1,name:1,grades:1})

db.restaurants.find({name:{$regex:"mon.*",$option:"i"}},{name:1,borough:1,"address.coord":1,cuisine:1})

db.restaurants.find({name: {regex: /^Mad/i, }},{name:1,borough:1,"address.coord":1,cuisine:1})