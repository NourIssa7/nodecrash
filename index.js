//  const Person = require('./person'); //file not module so .
// //import Person from "./person";
// const person1= new Person('ali',30);
// person1.greeting();
// console.log('h',' rferfre');


const http = require('http');
const path = require('path');
const fs = require('fs');
const { error } = require('console');


const server = http.createServer((req,res)=>{
        let filePath = path.join(
            __dirname,
            'public',
            req.url==='/'? 'index.html':req.url
        );
        let extt = path.extname(filePath);
        let contentType = 'text/html';
        switch(extt){
            case '.js':
                contentType = 'text/html';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/josn';
                break;                    
        } 
        fs.readFile(filePath, (err,content)=> {
            if(err) throw err;
            
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content);
        })
    
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`server running on port ${PORT}`));









//////////////////////this is to test logger

// const Logger = require('./reference/logger');
// const logger = new Logger();
// //logger.on('messagee',data=>console.log('Called Listener',data));
// logger.log('Hi');