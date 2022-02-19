const printString = function(string, callback){
    
    callback(setTimeOut(console.log(string), Math.random()*100));
    
}



printString("A",()=>{
    printString("B",()=>{
        printString("C", ()=> {});
    })
});