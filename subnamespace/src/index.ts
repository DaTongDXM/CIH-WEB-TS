/// <reference path='./SubAnimal.ts' />
    

namespace MainAnimal{
 

   export class Animal  {
        constructor(){
           
            new SubAnimal.Dog();
            new SubAnimal.Cat();
            new SubAnimal.Bird();
        }
    }
}




