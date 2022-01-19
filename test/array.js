function deepCopy(obj) {
  let newObj = Array.isArray(obj)? [] : {}; // 判断是一个数组还是一个对象
  // 遍历传进来的参数对象
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      if(typeof item === 'object') {
        newObj =  newObj.concat(deepCopy(item));
      } else {
        newObj.push(item);
      }
    })
  } else {
    for (key in obj) {
      if (typeof obj[key] === 'object') {
        newObj[key] = deepCopy(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

const obj = [1,2,{a:1, b:{c:2}}];
const obj2 = deepCopy(obj);
obj2[2].a = 100;
console.log(obj);
console.log(obj2);
console.log(JSON.parse(JSON.stringify(obj)));

const obj3 = {
  a:1,
  b:[1,2,3,{c:4, b:{g:7, f:[9,{g:10}]}}]
}
const obj4 = deepCopy(obj3);
console.log(obj4);
console.log(obj4.b[3].b);
console.log(JSON.parse(JSON.stringify(obj3)));
