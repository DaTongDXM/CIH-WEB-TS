class Animal {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  walk(distance: number) {
    console.log(`${this._name}走了${distance}米`);
  }
}
const animal = new Animal("动物");
//animal.walk(1000);

class Dog extends Animal {
  constructor() {
    super("");
  }
  say() {
    console.log("汪汪汪");
  }
  walk() {
    console.log("狗跑了1000米");
  }
  parnetWalk() {
    super.walk(2000);
  }
}

const dog = new Dog();
dog.say();
dog.walk();
dog.parnetWalk();
