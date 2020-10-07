//通用的类型集合
//interface和type的区别是，type可以直接表示基础类型，但是interface只能修饰对象
function getLandInfo(info) {
    console.log(info.name);
}
function setLandName(info, name) {
    info.name = name;
}
var landinfo = {
    name: "TD001",
    price: 3000
};
getLandInfo(landinfo);
//注意 字面量形式
// getLandInfo({
//   name: "TD001",
//   price: 3000,
// });
setLandName(landinfo, "TD002");
var landInfo = {
    name: "地块02",
    getInfo: function () {
        return this.name;
    }
};
function getLandInfos(info) {
    console.log(info.getInfo());
}
//类应用接口 要匹配接口里面的属性和方法
var house = /** @class */ (function () {
    function house() {
        this.name = "万达";
    }
    house.prototype.getInfo = function () {
        return this.name;
    };
    return house;
}());
var loupanInfo = {
    name: "万达",
    type: "别墅",
    getType: function () {
        console.log(this.name + "\u7684\u7C7B\u578B\u662F" + this.type);
    },
    getInfo: function () {
        return this.name;
    }
};
function getLouPanInfo(loupan) {
    loupan.getType();
}
getLouPanInfo(loupanInfo);
var getInfo = function (id) {
    return id;
};
