import https from 'https';
import fs from 'fs';

const option = {
  key: fs.readFileSync('cert/server.key'),
  cert: fs.readFileSync('cert/server.crt'),
}

https.createServer(option, (req, res) => {
    res.statusCode = 200;
    res.end('Hello World, Here is https server');
}).listen(3001, () => console.log('成功运行起https server服务'));