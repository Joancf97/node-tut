
const {readFile} = require('fs');

console.log('started a first task');
// Check file path 
readFile('./content/first.txt','utf8', ((err, result) => {
  if(err){
    console.log(err);
    return;
  } 
  console.log(result);
  console.log('Conpleted first task');
}));
// Set timeout
setTimeout(()=>{
  console.log('time out task finished');
},0);
// Set interval - the vent loop will invoque the function every 2 sec.
setInterval(()=>{
  console.log('Hello word!');
},200);

console.log('starting next task');