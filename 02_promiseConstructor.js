const {readFile} = require('fs');

const getDataFromFilePromise = filePath => {
    return new Promise((resolve,reject)=>{
        readFile(filePath, 'utf8', (err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
            
        })
    })
}

getDataFromFilePromise('README.md')
.then((data)=>{console.log(data)})
.catch((err)=>{console.log('Error!!!')})//err를 활용하는 경우가 있을 수 있으므로, err를 인자로 받도록 작성함.

module.exports = {getDataFromFilePromise};