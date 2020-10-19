/** 
* 类的存取器
* ts支持通过getter和setter来拦截对对象成员的访问，实现数据的封装和有效性验证，防止出现异常操作
*/
// class Room{
//     roomName:string
// }
// let room=new Room()
// room.roomName='主卧'


// class Room{
//     private _roomType:string;
//     get roomType(){
//         return this._roomType
//     }
//     set roomType(val:string){
//         if(['主卧','次卧','书房'].indexOf(val)>-1){
//             this._roomType=val
//         }else{
//             console.log('输入类型不正确')
//         }
//     }
// }

// const room=new Room()
// console.log(room.roomType)
// room.roomType='卫生间'
// room.roomType='书房'
// console.log(room.roomType)