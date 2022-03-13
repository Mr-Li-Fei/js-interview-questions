// 这里是项目入口文件
const num: number = 888;

interface ObjType{
   a?: string,
   b?: number,
}

const obj: ObjType = {}
obj.b = num;
console.log(obj.b);