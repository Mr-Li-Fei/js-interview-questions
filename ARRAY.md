# 如何判断一个变量是否为数组
***
  1. es5 情况下， 可以使用Array.isArray();
  2. 可以使用Object.protoType.toString.call() 方法确认， 返回是[object, Array]则认为是数组
***

# 判断数据类型
***
  1. 基础数据类型： string boolean number undefined null symbol,可以是typeof 对基本数据类型判断, 
  2. object 可以使用instanceof 对array，undefined null funciton等进行判断
  3. 可以使用Object.protoType.toString.call() 进行类型判断
***

# null 和 undefined 
***
  1. 相同点: 没有方法, 都表示无, 转布尔值都是false,
  2. 不同点：null 是一个关键字， undefined不是; null 是一个对象， undefined是window的一个属性, 数字类型转化时， null 是0, undefined 是 NaN
  3. 
***

# Array.protoType.sort 方法
***
  1. sort() 是原地算法，对数组排序，并返回数组， 默认排序方式是将元素转换成字符串， 然后进行比较ASCII码 比较， 会产生难以预料的结果，所以常常会使用compareFunction
  2. sort((a,b) => a - b); 三种结果， 若是小于0, 则a排在b 的前面， 若是等于0, 则两个位置不变， 若是大于0， 则b排在a的前面
  3. 原地算法是不会额外定义一个数据结构，可以定义些许的变量进行辅助作用， 比如， 常规数组排序会新建一个新的数组结构，将原数组的比较大值或者小值， 依次放入新数组， 会得到一个升序或者降序排列， 原地则需要新建数组， 但可以定义变量
***
# String.protoType.localeCompare 方法
***
  1. 返回一个数字来指示一个参考字符串的位置
  2. 一般很少单独使用，可以与sort() 方法组合使用，通过比较字符串来给出一定的顺序
  `arr.sort((a, b) => b.name.localeCompare(a.name)); // 逆序，所以 b 在 a 前面`
***
# Array.from 方法
***
  1. 对一个类数组或者可迭代对象创建一个新的，浅拷贝的数组实例
  ```
    // 类数组

    Array.from('foo');
    // [ "f", "o", "o" ]

    // 从set 中生成数组

    const set = new Set(['foo', 'bar', 'baz', 'foo']);
    Array.from(set);
    // [ "foo", "bar", "baz" ]

    // 从map 中生成数组

    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(map);
    // [[1, 2], [2, 4], [4, 8]]

    const mapper = new Map([['1', 'a'], ['2', 'b']]);
    Array.from(mapper.values());
    // ['a', 'b'];

    Array.from(mapper.keys());
    // ['1', '2'];
  ```
***
# 数组去重
***
  1. 对于数组元素为常规基本类型元素的去重， 仅仅使用[...new Set([1,1,1,2,3,4,5,5,])] // => [1,2,3,4,5], 即可实现数组去重， 
  2. Array.from(new Set([1,2,3,3])) // => [1,2,3]
  3. 或者新建数组，配合Array.protoType.includes()或者 Array.protoType.indexOf()方法
***


