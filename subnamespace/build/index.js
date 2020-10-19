"use strict";
var SubAnimal;
(function (SubAnimal) {
    var Persion;
    (function (Persion) {
        var Man = /** @class */ (function () {
            function Man() {
            }
            return Man;
        }());
        Persion.Man = Man;
    })(Persion = SubAnimal.Persion || (SubAnimal.Persion = {}));
    var girl = {
        name: '小樱'
    };
    var Dog = /** @class */ (function () {
        function Dog() {
            console.log('this is a dog');
        }
        return Dog;
    }());
    SubAnimal.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat() {
            console.log('this is a cat');
        }
        return Cat;
    }());
    SubAnimal.Cat = Cat;
    var Bird = /** @class */ (function () {
        function Bird() {
            console.log('this is a bird');
        }
        return Bird;
    }());
    SubAnimal.Bird = Bird;
})(SubAnimal || (SubAnimal = {}));
/// <reference path='./SubAnimal.ts' />
var MainAnimal;
(function (MainAnimal) {
    var Animal = /** @class */ (function () {
        function Animal() {
            new SubAnimal.Dog();
            new SubAnimal.Cat();
            new SubAnimal.Bird();
        }
        return Animal;
    }());
    MainAnimal.Animal = Animal;
})(MainAnimal || (MainAnimal = {}));
