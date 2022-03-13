import express from 'express';
const router = express.Router();

// 这里是把关于部门得api 单独拿出来放在这个文件中,再暴漏出去， 在express.js文件中引用

router.get('/dept_update', (req, res) => {
    res.send('部门修改数据');
});
router.get('/dept_del', (req, res) => {
    res.send('删除部门数据');
});
router.get('/dept_date', (req, res) => {
    res.send('获取部门数据');
});

export default router;