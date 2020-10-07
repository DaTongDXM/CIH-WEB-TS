//通用的类型集合
//interface和type的区别是，type可以直接表示基础类型，但是interface只能修饰对象
//interface不会变成js代码
interface LandInfo {
  name: string;
  //可选
  //只读
  //[propName: string]: any;
  getInfo(): string;
}

function getLandInfo(info: { name: string }): void {
  console.log(info.name);
}

function setLandName(info: { name: string }, name: string) {
  info.name = name;
}

const landinfo = {
  name: "TD001",
  price: 3000,
};
getLandInfo(landinfo);
//注意 字面量形式
// getLandInfo({
//   name: "TD001",
//   price: 3000,
// });
setLandName(landinfo, "TD002");

const landInfo = {
  name: "地块02",
  getInfo() {
    return this.name;
  },
};
function getLandInfos(info: LandInfo): void {
  console.log(info.getInfo());
}

//类应用接口 要匹配接口里面的属性和方法
class house implements LandInfo {
  name = "万达";
  getInfo() {
    return this.name;
  }
}

//接口之间的继承
interface LouPan extends LandInfo {
  type: string;
  getType(): void;
}

const loupanInfo = {
  name: "万达",
  type: "别墅",
  getType() {
    console.log(`${this.name}的类型是${this.type}`);
  },
  getInfo() {
    return this.name;
  },
};

function getLouPanInfo(loupan: LouPan): void {
  loupan.getType();
}
getLouPanInfo(loupanInfo);

//函数类型接口
interface GetInfo {
  (id: string): string;
}

let getInfo: GetInfo = (id) => {
  return id;
};
