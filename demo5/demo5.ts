/** 类的属性与方法*/
//静态属性和方法，是定义在类(构造函数)本身上的，只能通过类(构造函数)来调用，不能通过类对象调用
//成员属性和方法，是定义在构造函数的原型对象上的，也就是定义在构造函数的prototype上地，所有的new出来的对象都能调用。
class Land{
  //静态属性
  static landName='地块01';
  //成员属性
  landArea:number;
  constructor(area:number){
      this.landArea=area;
  }
  //静态方法
  static getLandName(){
      return this.landName
  }
  //成员方法
  getLandArea(){
      return this.landArea
  }
}

const land=new Land(1000)

/** 类的继承 */
//在TS中可以使用面向对象开发模式中的继承来扩展一个类,子类继承父类功能的同时还可以扩展自身的功能，在ts中我们使用extends关键字来实现继承

// class House{
//     _type:string;
//     constructor(type:string){
//         this._type=type
//     }
//     getHouseType(name:string='万达广场'){
//         console.log(`${name}的房屋类型是${this._type}`)
//     }
// }

// class LvDi extends House{
//     //若父类含有constructor函数，则子类必须调用super(),super()会执行父类的构造函数
  
//     getHouseType(name:string='绿地中心'){
//        super.getHouseType(name)
//     }
// }

// class BaoLi extends House{
  
//     //重写
//     getHouseType(name:string){
//         console.log(`${name}的房屋类型没有${this._type}`)
//     }
// }

// const lvdi=new LvDi('别墅')
// lvdi.getHouseType()
// const baoli=new BaoLi('写字楼')
// baoli.getHouseType('保利地产')

/**类的访问修饰符和构造函数
* public 默认是公有的，公有类型的成员在类内外都可以访问
* private 私有类型只能在类内部访问
* protect 保护类型在类内及其所派生的类内服访问
*/


//构造函数的使用参数属性及如何执行
//若子类含有constructor函数，则子类必须调用super(),super()会执行父类的构造函数
class House{
  public _type:string;
  private _price:number;
  protected _area=10000;
  constructor(type:string){
      this._type=type
  }
  // constructor(public _type:string){}
  public getHouseType(name:string='万达广场'){
      console.log(`${name}的房屋类型是${this._type}`)
  }
  setHousePrice(){
      this._price=1000
  }
}

class LvDi extends House{
  
  constructor(public area:number,type:string){super(type)}
  getHouseType(name:string='绿地中心'){
     super.getHouseType(name)
  }
  isMoreThenBase(){
     console.log( this.area>this._area?true:false)
  }
}

class BaoLi extends House{
  constructor(type:string){super(type)}
  //重写
  getHouseType(name:string){
      console.log(`${name}的房屋类型没有${this._type}`)
  }
}

// const lvdi=new LvDi(100000,'别墅')
// lvdi.getHouseType()
// lvdi.isMoreThenBase()
// const baoli=new BaoLi('写字楼')
// baoli.getHouseType('保利地产')

// new House()._type
// new House()._price
// new House()._area

/** 
* 类的存取器
* ts支持通过getter和setter来拦截对对象成员的访问，实现数据的封装和有效性验证，防止出现异常操作
*/
// class Room{
//     roomName:string
// }
// let room=new Room()
// room.roomName='主卧'


// class Room{
//     private _roomType:string;
//     get roomType(){
//         return this._roomType
//     }
//     set roomType(val:string){
//         if(['主卧','次卧','书房'].indexOf(val)>-1){
//             this._roomType=val
//         }else{
//             console.log('输入类型不正确')
//         }
//     }
// }

// const room=new Room()
// console.log(room.roomType)
// room.roomType='卫生间'
// room.roomType='书房'
// console.log(room.roomType)

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


