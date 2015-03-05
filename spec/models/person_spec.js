var models = require("../../models/models");
var Person = models.Person;

var db = require("../../config/db");


describe("Person", function(){
    var moeId, larryId, curlyId;
    beforeEach(function(done){
        db.connect(function(){
            db.seed(function(err, larry, curly, moe){
                moeId = moe._id;
                larryId = larry._id;
                curlyId = curly._id;
                done();
            });
        });
    });
    afterEach(function(done){
       db.disconnect(function(){
           done();
       });
    });
    
    describe("find one by name", function(){
        var person;
        beforeEach(function(done){
            Person.findOneByName("Moe", function(err, _person){
                person = _person;
                done();
            });
        });
        it("returns Moe", function(){
            expect(person.name).toEqual("Moe");
        })
    });
    describe("find all", function(){
        var people;
        beforeEach(function(done){
            Person.findAll(function(err, _people){
                people = _people;
                done();
            });
        });
        it("There are 3 people", function(){
            expect(people.length).toEqual(3);
        });
        it("Curly is first", function(){
            expect(people[0].name).toEqual("Curly");
        });
    });
    describe("find one by id", function(){
        var person;
        beforeEach(function(done){
            Person.findOneById(larryId, function(err, _person){
                person = _person;
                done();
            });
        });
        it("is Larry", function(){
            expect(person.name).toEqual("Larry");
        });
    });
})