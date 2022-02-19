const path = require('path');
const {getDataFromFilePromise} = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, '/files/user1.json');
const user2Path = path.join(__dirname, '/files/user2.json');

const readAllUserChaining = (user1Path, user2Path) => {

    let tmparr = [];
    getDataFromFilePromise(user1Path)
    .then((data)=>{
        tmparr.push(JSON.parse(data))
    })
    .then(()=>{
        console.log(tmparr)
    })

    getDataFromFilePromise(user2Path)
    .then((data)=>{
        tmparr.push(JSON.parse(data))
    });

}

readAllUserChaining(user1Path, user2Path);

module.exports = {
    readAllUserChaining
}