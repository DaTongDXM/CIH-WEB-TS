"use strict";
// namespace AllAnimal{
// }
var Dog = /** @class */ (function () {
    function Dog() {
        console.log('this is a dog');
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        console.log('this is a cat');
    }
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        console.log('this is a bird');
    }
    return Bird;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        new Dog();
        new Cat();
        new Bird();
    }
    return Animal;
}());
