var mongoose = require("mongoose");
var models = require("../models/models");
var Person = models.Person;

module.exports = {
    connect : connect,
    disconnect : disconnect, 
    seed : seed
}

function connect(cb){
    mongoose.connect("mongodb://localhost/my_world");

    mongoose.connection.once("open", function(){
        console.log("connected"); 
        cb();
    });
}

function disconnect(cb){
    mongoose.disconnect(function(){
        console.log("disconnected");
        cb();
    });
}

function seed(cb){
    var people = [
        {name:"Larry"}, 
        {name:"Curly"},
        {name:"Moe"}
    ];
    Person.remove({}, function(){
        Person.create(people, cb);
    });
}