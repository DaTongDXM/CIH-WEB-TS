interface Teacher{
    isTeacher:boolean;
    teach():void;
}
interface Student{
    isTeacher:boolean;
    study():void
}

//类型断言
function getInfo(param:Teacher|Student){
    if(param.isTeacher){
        (param as Teacher).teach()
    }
    else{
        (param as Student).study()
    }
}

//in

function getInfoSec(param:Teacher|Student){
    if('teach' in param){
        param.teach
    }else{
        param.study
    }
}

//typeof

function add( first :string|number,second:string|number){
    if(typeof first==='string'||typeof second ==='string'){
        return `${first}${second}`
    }
    return first+second
}

//instanceof

class NumberObj{
    count:number
}

function addSec(x:Object|NumberObj,y:Object|NumberObj){
    if(x instanceof NumberObj&&y instanceof NumberObj){
        return x.count+y.count
    }
    return 0
}