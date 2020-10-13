//类泛型

class DataBase{
    constructor(public data:string[]|number[]){}
    getData(i:number):string|number{
        return this.data[i]
    }
}

const data=new DataBase([1])
data.getData(0)


// class DataBase<T>{
//     constructor(public data:T[]){}
//     getData(i:number):T{
//         return this.data[i]
//     }
// }

// const t=new DataBase<string>(['a'])



//泛型约束


// interface Item{
//     index:number
// }

// class DataBase<T extends Item>{
//     constructor(public data:T[]){}
//     getData(i:number):number{
//         return this.data[i].index
//     }
// }

// const t=new DataBase([{
//     index:123
// }])