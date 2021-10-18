const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf-8', (err,res) => {
    if(err){
        console.log(err)
        return;
    }
    const first = res
writeFile('./content/third.txt',`Result of async is: ${first}`, (err,res) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(res)
})
})

