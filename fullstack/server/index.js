// const dotenv = require('dotenv');
// dotenv.config();

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

