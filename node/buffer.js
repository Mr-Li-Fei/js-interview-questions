//  记录buffer的学习

// 创建Buffer
 const buf1 = Buffer.from('i am feifei'); // 值接收字符串，或者数组， 或者是类数组
 const buf2 = Buffer.from([1,2,3]);
 console.log(buf1, buf1.toString());
 console.log(buf2, buf2.toString());
 console.log(buf2.toJSON().data);

 const buf3 = Buffer.alloc(1024); // 接收一个值， 定义buffer 的大小
 console.log(buf3);

 console.log(buf3.length);  // 获取buffer 的长度

 const buf4 = Buffer.from(',lifeifei shi zui shuai de')
 const totalBuf = Buffer.concat([buf1,buf4]);  //将两个buffer 对象合并
 console.log(totalBuf, totalBuf.toString());

 buf4.copy(buf1);  // 将buf4 复制到buf1 中;
 console.log(buf1.toString());
 console.log(buf4.toString());

 const buf5 = buf4.slice(10);  // 截取指定位置到指定位置的buffer 字段
 console.log(buf5.toString());