//泛型 是泛指的类型，用于创建可复用的组件，一个组件可支持多种类型数据

function add(param1:number|string,param2:number|string){
   return param1
}
add(1,'a')


// function add<T>(param1:T,param2:T){
//     return param1
//  }
//  add<number>(1,1)


//  function sort<T>(param1:Array<T>){

//  }
//  sort<string>(['a','b','c'])