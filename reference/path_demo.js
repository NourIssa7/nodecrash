const path = require('path');
 console.log(path.basename(__filename));
// console.log(__filename);
console.log(path.dirname(__filename));
console.log(__dirname);
console.log(path.parse(__filename).name);
console.log(path.join(__dirname,'test','hello.html'))
