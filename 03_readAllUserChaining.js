const path = require('path');
const {getDataFromFilePromise} = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, '/files/user1.json');
const user2Path = path.join(__dirname, '/files/user2.json');

// const readAllUserChaining = (user1Path, user2Path) => {

//     let tmparr = [];
//     getDataFromFilePromise(user1Path)
//     .then((data)=>{
//         tmparr.push(JSON.parse(data))
//     })
//     .then(()=>{
//         console.log(tmparr)
//     })

//     getDataFromFilePromise(user2Path)
//     .then((data)=>{
        // tmparr.push(JSON.parse(data))
//     });

// }
const readAllUserChaining = () => {

    let tmparr = [];
    return getDataFromFilePromise(user1Path)
    .then(user1 => {
        tmparr.push(user1);
        return getDataFromFilePromise(user2Path)
    })
    .then(user2 => {
        tmparr.push(user2);
        let result = tmparr.map(user => JSON.parse(user));
        return result;
    })
}

readAllUserChaining();

module.exports = {
    readAllUserChaining
}