var mongoose = require("mongoose");
var db = require("./config/db");
var models = require("./models/models");

// var Person = mongoose.model("Person", {
//     name : String
// });

// mongoose.connect("mongodb://localhost/my_world");
db.connect(function(){
    db.seed(function(err, _larry, _curly, _moe){
            
    });
    setTimeout(function(){
        db.disconnect(function(){});
    }, 3000);
    
});
