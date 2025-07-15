// // Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });







// // const http = require('node:http');
// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World </h1>\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




//named import
// import {a , b , c} from "./mymodule.js"
// console.log(a , b, c);


//default import
// import anyName from  "./mymodule.js" // for "type":"module"
const anyName = require("./mymodule.js")//for type "type":"commonjs"
console.log(anyName , __dirname , __filename);