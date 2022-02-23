// var result = sum(1,2,3);

// 函数的柯里化

// var result = sum(1)(2)(3);

// console.log(result);//6

let count = 0;
function sum() {
    if(arguments[0]) {
        count += arguments[0];
        return sum;
    };
    return count;
}

console.log(sum(1)(2)(3)(4)());

