


/**类的访问修饰符和构造函数
* public 默认是公有的，公有类型的成员在类内外都可以访问
* private 私有类型只能在类内部访问
* protect 保护类型在类内及其所派生的类内服访问
*/


//构造函数的使用参数属性及如何执行
//若子类含有constructor函数，则子类必须调用super(),super()会执行父类的构造函数
class Houses{
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
  
  class LvDi extends Houses{
    
    constructor(public area:number,type:string){super(type)}
    getHouseType(name:string='绿地中心'){
       super.getHouseType(name)
    }
    isMoreThenBase(){
       console.log( this.area>this._area?true:false)
    }
  }
  
  class BaoLi extends Houses{
    constructor(type:string){super(type)}
    //重写
    getHouseType(name:string){
        console.log(`${name}的房屋类型没有${this._type}`)
    }
  }
  
  const lvdi=new LvDi(100000,'别墅')
  lvdi.getHouseType()
  lvdi.isMoreThenBase()
  const baoli=new BaoLi('写字楼')
  baoli.getHouseType('保利地产')
  
  new House()._type
  new House()._price
  new House()._area

  export {}