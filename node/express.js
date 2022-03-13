import express from 'express';
import path from 'path';
const app = express();
// const __dirname = path.resolve();
// const __filename = path.resolve();
import dept from './express-router/dept.js'

// 默认请求,输出"Hello World"
app.get('/', (req, res) => {
  res.send('Hello World, here is express server');
});

app.get('/user_list_query', (req, res) => {
  res.send('用户列表数据');
})

app.delete('/user_del', (req, res) => {
  res.send('用户删除接口');
})

// 引用关于部门api 的封装文件， 使用app.use 定义接口以dept开头的进入dept.js 文件;
app.use('/dept', dept);
// 使用express.static(), 可以通过路径访问静态文件
app.use('/public', express.static('public'));

app.get('/file', (req, res) => {
  res.statusCode = 200;
  console.log(__dirname);
  console.log(__filename);
  res.sendFile(__dirname+'/public/record.txt');
})

app.listen(3002, () => {
  console.log('express server 已经运行起来了');
})
