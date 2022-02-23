// es5的原型继承实现，只继承了属性， 未继承原型上的方法 

// function Person(name){
//   this.name = name
// }
// Person.prototype.sayHi = function(){
//       console.log('你好，我是'+this.name)
//   }//这个方法是拿出来特地说明与class继承的不同

// function Child(name,age){
//   console.log(this);
//   Person.call(this,name);
//   console.log(this, "后来的")
//   this.age = age
// }

// let xw = new Child('小王',10)
// console.log(xw.name); //小王
// console.log(xw.age);
// xw.sayHi() //报错


//  es6 的原型继承实现

class Person{
   constructor(name){
       this.name=name
   }
   sayHi(){
        console.log('你好，我是'+this.name)
   }
}

class Child extends Person{
   constructor(name,age){
       super(name)
       this.age=age
   }
}

let xw = new Child('小王',10)
xw.name//'小王'
xw.sayHi()//'你好，我是小王'