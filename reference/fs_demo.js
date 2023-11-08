const fs = require('fs');
const path=require('path');


// fs.mkdir(path.join(__dirname,'test'),{},err=>{
//     if(err) throw err;
//     console.log('done');
// });


fs.writeFile(path.join(__dirname,'test','text.txt'),'hiiiiiiii' ,err=>{
    if(err) throw err;
    console.log('doneeeee');
});
