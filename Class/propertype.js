const Fun=function(){}
const fun=new Fun()
console.log(Fun.prototype.constructor===Fun);
console.log(fun.__proto__===Fun.prototype)
 