const express = require('express');
// import express from 'express';

const app: any = express();

app.all('*', (req: any, res: any) => {
    res.send('hello world');
})
app.listen(3000, () => {
    console.log('服务已经启动了, 在`localhost:3000`');
})