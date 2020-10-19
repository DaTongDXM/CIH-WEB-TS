
namespace SubAnimal{
    export namespace Persion{
        export class Man{
           constructor(){}
        }
        export interface woman{
            name:string
        }
    }

    const girl:Persion.woman={
        name:'小樱'
    }

    export class Dog{
        constructor(){
            console.log('this is a dog');
            
        }
    }
    export class Cat{
        constructor(){
            console.log('this is a cat')
        }
    }
    export class Bird{
        constructor(){
            console.log('this is a bird')
        }
    }
}