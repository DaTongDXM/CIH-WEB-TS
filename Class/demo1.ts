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