const {readFile} = require('fs');

const getDataFromFile = function (filePath, callback){

    readFile(filePath, 'utf-8', (err, data)=>{
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });

};

getDataFromFile('README.md', (err,data)=>console.log(data));

module.exports = {getDataFromFile};