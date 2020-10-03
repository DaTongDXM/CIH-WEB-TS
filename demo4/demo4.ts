//通用的类型集合
//interface和type的区别是，type可以直接表示基础类型，但是interface只能修饰对象
interface LandInfo {
  name: string;
  //可选
  //只读
}

function getLandInfo(info: { name: string }): void {
  console.log(info.name);
}

function setLandName(info: { name: string }, name: string) {
  info.name = name;
}

const landinfo = {
  name: "TD001",
};
getLandInfo(landinfo);
setLandName(landinfo, "TD002");
