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

