// namespace AllAnimal{

// }

class Dog{
    constructor(){
        console.log('this is a dog');
        
    }
}
class Cat{
    constructor(){
        console.log('this is a cat')
    }
}
class Bird{
    constructor(){
        console.log('this is a bird')
    }
}

 class Animal{
    constructor(){
        new Dog();
        new Cat();
        new Bird();
    }
}

