const { get } = require('http');
const path = require('path');
const {getDataFromFilePromise} = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, './files/user1.json');
const user2Path = path.join(__dirname, './files/user2.json');

const readAllUserAsyncAwait = async () =>{

    const user1 = await getDataFromFilePromise(user1Path);
    const user2 = await getDataFromFilePromise(user2Path);

    console.log(user1, user2)
}

readAllUserAsyncAwait();

module.exports = {
    readAllUserAsyncAwait
}