// interface houseInfo {name:string,area:number}



function getHouseInfo(data:{name:string,area:number}){
    const {name,area}=data
    console.log(`名称：${name};面积：${area} `)
}

getHouseInfo({name:'恒大',area:1000})