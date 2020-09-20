
'strictNullChecks'
const age:number=42;
const name0:string='kobe';
const introduce=`Hello,my name is ${name0},i am ${age}`
const flag:boolean=true;
const u: undefined = undefined;
const n: null = null;

/*对象类型*/
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
//Class
class House{}
const house:House=new House()