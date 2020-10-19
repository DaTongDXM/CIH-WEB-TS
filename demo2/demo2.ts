
'strictNullChecks'
const age:number=42;
const name0:string='kobe';
const introduce=`Hello,my name is ${name0},i am ${age}`
const flag:boolean=true;
const u: undefined = undefined;
const n: null = null;

/** 联合类型*/
let count:string[]|string;
count=['a','b','c']
count='abc'

//联合类型在使用得当时候，只能访问到所属联合类型的共有的属性和方法
function getLength(count:string[]|string){
    count.length;
    // count.join()
}

/*对象类型*/
//ENUM  默认从0基数，可以手动赋值，后边没有被赋值的从赋值的属性递增
enum ZXStatus{
    JZX,BJZ,MP
}
function getZXStatus(statu){
    switch(statu){
        case ZXStatus.JZX:return '精装修'
        break;
        case ZXStatus.BJZ:return '半精装'
        break;
        default:
            return '毛坯';
            break;
    }
}
console.log(getZXStatus(0))

//枚举反推
console.log(ZXStatus[1])

//Array
const list1:number[]=[1,2,3]
const list2:Array<string>=['house,land']
//Tuple
const list3:[string,number,boolean]=['华夏幸福',10000,true]
//Object
const land:{name:string,area:number}={
    name:'地块1',area:1000
}
//Function
const fun:(str:string)=>number=(str)=>{
    return Number(str)
}

let iFunType:(count:number)=>number;
function sum(count:number):number{
    return ++count
}
iFunType=sum

//Class
class House{}
const house:House=new House()



//元祖 tuple


const  arr3:[string,string,number]=['a','b',1];

//类型推断和注解

const num0:number=123

const num1=123
let num2=123
const str0='123'
let str1='123'

let arr0=[1,2,3,4]
let arr1=['1,2,3,4']
let arr2=['1,2,3,4',0]
arr2=[1,2,3,4]





let num3:number|string=123
num3='123'

function getData(num0,num1){
    return num0+num1
}
// interface house{
//     name:string;
//     price:number;
// }
const houseInfo="{'name':'万科',price:10000}"
// const _houseInfo =JSON.parse(houseInfo)


//类型断言

const str:any='asdfg';
const strLength=(<string>str).length
const strLen=(str as string).length
console.log(strLen)

export {}