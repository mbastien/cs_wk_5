var mongoose = require("mongoose");
var models = require("../models/models");
var Person = models.Person;
var Thing = models.Thing;

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
    var things = [
        {name : "Rock"},
        {name : "Paper"},
        {name : "Scissors"}
    ]
    Person.remove({}, function(){
        Thing.remove({}, function(){
            Thing.create(things, function(){
                Person.create(people, cb);
            });
        });

    });
}