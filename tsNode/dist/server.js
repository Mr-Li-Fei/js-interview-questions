"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.all('*', function (req, res) {
    res.send('hello world');
});
app.listen(3000, function () {
    console.log('服务已经启动了');
});
