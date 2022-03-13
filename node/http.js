import http from 'http';
import url from 'url';
import qs from 'querystring';
import { hostname } from 'os';

const port = 3000;

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    if (pathname === '/') {
        if (req.method === 'GET') {
            const { username, password} = qs.parse(query);
            console.log(username, password);
            const response = {
                code: 200,
                status: 'success',
                msaaage: '请求已成功！'
            }
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/plain');
            res.end(JSON.stringify(response));
        }
        if (req.method === "POST") {
            req.on('data', (data) => {
                const { username, password } = JSON.parse(data);
                res.end(`${username}已经认证成功了`);
            })
        }

    }
})

server.listen(port, () => {
    console.log(`http服务器已经在运行`);
})