
/** 类的继承 */
//在TS中可以使用面向对象开发模式中的继承来扩展一个类,子类继承父类功能的同时还可以扩展自身的功能，在ts中我们使用extends关键字来实现继承

class House{
    _type:string;
    constructor(type:string){
        this._type=type
    }
    getHouseType(name:string='万达广场'){
        console.log(`${name}的房屋类型是${this._type}`)
    }
}

class LvDi extends House{
    getHouseType(name:string='绿地中心'){
       super.getHouseType(name)
    }
}

class BaoLi extends House{
    //重写
    getHouseType(name:string){
        console.log(`${name}的房屋类型没有${this._type}`)
    }
}

const lvdi=new LvDi('别墅')
lvdi.getHouseType()
const baoli=new BaoLi('写字楼')
baoli.getHouseType('保利地产')

export {}