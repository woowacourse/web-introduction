const http = require('http');
const fs = require('fs'); // 파일 시스템 모듈 추가

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('html/index.html', (err, data) => { // index.html 파일 읽기
    if (err) {
      res.statusCode = 500;
      res.end(`Error: ${err.message}`);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
