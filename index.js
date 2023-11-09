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
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,'public','index.html'), (err,content)=> {
            if(err) throw err;

            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(content); 
        })
       
    }

    if(req.url==='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
        })
    }


});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`server running on port ${PORT}`));









//////////////////////this is to test logger

// const Logger = require('./reference/logger');
// const logger = new Logger();
// //logger.on('messagee',data=>console.log('Called Listener',data));
// logger.log('Hi');