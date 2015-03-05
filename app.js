var mongoose = require("mongoose");

var Person = mongoose.model("Person", {
    name : String
});

mongoose.connect("mongodb://localhost/my_world");

mongoose.connection.once("open", function(){
    console.log("connected"); 
    var people = [
        {name:"Larry"}, 
        {name:"Curly"},
        {name:"Moe"}
    ];
    
   
    Person.remove({}, function(){
        Person.create(people, function(err, _larry, _curly, _moe, _shep){
            //Person.update({_id:_moe._id}, {$set:{name:"Shep"}});
            var query = {name : "Moe"};
            var update = {$set : {name : "Shep"}};
            Person.find({_id:_moe._id}, function(err, p){
               console.log(p); 
            });
            Person.update(query, update, function(err, data){ // need this callback for the update to work!
                console.log("updated err : " + err + " data : " + data);
            });
            //console.log("3 people");
            //console.log(_moe);
            //console.log(_larry);
            //console.log(_curly);
            //console.log(_shep);
        });
    })
    setTimeout(function(){
        mongoose.disconnect(function(){
            console.log("disconnected");
        });
    }, 3000);
});