var totoro = {
    name: 'toto',
    birthday: '16/04/1988',
    height: 356,
};
var Manga = function(name,birthday,height){
    this.name = name; this.birthday = birthday; this.height = height; }
var titiri = new Manga('lol','07/07/707',128);
//titiri.hi = function(){ return 'I\' m ' + this.name; };
//console.dir(titiri);
Manga.prototype.hi = function(){return 'Hi '+ this.name;};
var tuturu = Object.create(Manga.prototype);
titiri.hi();
tuturu.hi();
console.dir(tuturu);
Manga.prototype.constructor.call(tuturu,'hiiiihaaaaa','01/02/03',4);
tuturu.hi();
//-------------------------------------------------------
// HERITAGE
var Animal = function () {
    this.name = 'unknown';
    this.getName = function () {
        return this.name;
    }
    this.talk = function () {
        return '...';
    }
};
var Dog = function () {
    var private = 42;
    this.name = "Bello";
    this.talk = function () {
        return 'WOUF WOUF !';
    }
};
// Dog spécialise Animal
Dog.prototype = new Animal();

var dog = new Dog();

console.log(
    "Is dog an instance of Dog? ", dog instanceof Dog, "\n",
    "Is dog an instance of Animal? ", dog instanceof Animal, "\n",
    dog.talk() +"\n", // Should be: "WOUF WOUF !"
    dog.getName() +"\n", // Should be: "Bello"
    dog.private +"\n" // Should be: 'undefined'
);