// js函数
function add(a,b){
    return a+b
}

add(1,1) // return 2
add('1',1) // return '11'

//ts函数

function tsAdd(a:number,b:number){
    return a+b
}

tsAdd(1,1) // return 2
tsAdd(1,1) // return '11'


//返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为void而不能留空。
// let add:(first:number,second:number)=>number=function(x:number,y:number):number{
//     console.log(x+y)
//     return x+y
// }
// add(1,2)



//可选参数和默认参数

// function getHouseInfo1(name,price){
//     console.log(name,price)
// }

// getHouseInfo('123')


//传递给一个函数的参数个数必须与函数期望的参数个数一致,在js中，每一个参数都是可选的，没传的时候他是undefined    

//在ts中也是有可选的参数，只需要加？  可选参数必须放在必选参数后面
// function getHouseInfo(name:string,price?:number):void{
//    let res=  price? price:name
// }
//默认参数不必要放在必选参数后面，如果放在前面，必须指定undefined
// function getHouseInfo(name:string,price=1000):void{
//     let res=  price? price:name
//  }

 //可选参数和默认参数的参数类型是：(name:string,price?:number)=>void   

 function getHouseInfo(name:string='碧桂园',price:number):void{
    console.log(name,price)
}
getHouseInfo('万科',122)
getHouseInfo(undefined,122)

//剩余参数

// function getInfo(...arg:string[]){
//     console.log(arg.join(''))
// }