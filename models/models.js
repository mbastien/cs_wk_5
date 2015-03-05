var mongoose = require("mongoose");
// var db = require("./config/db");

var PersonSchema = new mongoose.Schema({
    name:String
});

PersonSchema.statics.findOneByName = function(name, cb){
    this.findOne({name:name}, cb);
};

PersonSchema.statics.findAll = function(cb){
    this.find({}).sort("name").exec(cb);
};

PersonSchema.statics.findOneById = function(id, cb){
    this.findOne({_id:id}, cb);
};

var Person = mongoose.model("Person", PersonSchema);

module.exports = {
    Person: Person
};