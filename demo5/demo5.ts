
/** 
* 抽象类
* 抽象类是专供其他类继承的基类，不能被实例化，且抽象方法不包含具体的实现，但是必须在子类中实现
* 抽象类与interface不同的是，抽象类内部可以包含方法的实现
*/

abstract class Animal{
  constructor(public name:string){}

  abstract sayHello():void

  move(){
      console.log(`${this.name}在散步...`)
  }
}

interface Animel{
  sayHello():void;
}

class Dog extends Animal{
  sayHello(){console.log('汪汪')}
}

class Cat implements Animel{
  sayHello(){
      console.log('喵喵')
  }
}

// const animal=new Animal()
const dog=new Dog('旺财')
dog.sayHello()
dog.move()
const cat=new Cat()
cat.sayHello()


