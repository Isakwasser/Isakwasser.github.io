const dotenv = require("dotenv");
dotenv.config();

// console.log(process.pid);
// console.log(process.env.PORT);
// console.log(process.argv);
// process.exit();

// const path = require('path');
// console.log(path.join(__dirname,'first', 'second'));
// console.log(path.join(__filename,'first', 'second'));
// console.log(path.resolve('first', 'second'));

// -----------------------------------------------------------

// const siteURL = 'http://localhost:8080/users?id=1023';
// const url = new URL(siteURL);
// console.log(url);

// -----------------------------------------------------------

// const fs = require('fs');
// const path = require('path');

// console.log('START');
// // fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true});
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('Папка создана');
// });
// console.log('END');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Some string\n', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Файл записан');
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Some string 2', (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Файл записан');
//     });
// });

// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve();
//     }));
// }

// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve();
//     }));
// }

// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//         if (err) {
//             return reject(err.message);
//         }
//         resolve(data);
//     }));
// }

// writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'First\n')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'Second\n'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test2.txt'), 'Third\n'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test2.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// const os = require("os");
// const cluster = require("cluster");

// // console.log(os.platform());
// // console.log(os.arch());
// // console.log(os.cpus());

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Воркер с pid= ${worker.process.pid} умер`);
//     cluster.fork();
//   });
// } else {
//   console.log(`Воркер с pid= ${process.pid} запущен`);

//   setInterval(() => {
//     console.log(`Воркер с pid= ${process.pid} еще работает`);
//   }, 5000);
// }

// const Emitter = require("events");

// const emitter = new Emitter();

// // emitter.on("message", (data, second, third) => {
// //   console.log(`Вы прислали сообщение ${data}`);
// //   console.log(`Вы прислали сообщение ${second}`);
// // });
// emitter.once("message", (data, second, third) => {
//   console.log(`Вы прислали сообщение ${data}`);
//   console.log(`Вы прислали сообщение ${second}`);
// });

// const MESSAGE = process.env.MESSAGE || "";
// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// }

// /**
//  * Streams
//  * Readable
//  * Writable
//  * Duplex
//  * Transform
//  */

// const fs = require("fs");
// const path = require("path");

// // fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log(data);
// // });

// const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => console.log(`Закончили читать`));
// stream.on("open", () => console.log(`Начали читать`));
// stream.on("error", (e) => console.log(e));

const http = require("http");

const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-type": "text/html; charset=utf-8",
//   });
//   res.end("<h1>Сервер работает!</h1>");
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  if (req.url === "/users") {
    return res.end(JSON.stringify([{ id: 1, name: "USERS" }]));
  }
  if (req.url === "/posts") {
    return res.end("POSTS");
  }
  res.end("<h1>Сервер работает!</h1>");
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
