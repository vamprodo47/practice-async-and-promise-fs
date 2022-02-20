const path = require('path');
const {getDataFromFilePromise} = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, './files/user1.json');
const user2Path = path.join(__dirname, './files/user2.json');

const readAllUserAsyncAwait = async () =>{

    const users = await Promise.all([
        getDataFromFilePromise(user1Path),
        getDataFromFilePromise(user2Path)
    ])
    .then((users) => users.map(user => JSON.parse(user)))

}

readAllUserAsyncAwait();

module.exports = {
    readAllUserAsyncAwait
}