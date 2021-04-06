// asincronous aproach to write and read files
const {readFile, writeFile} = require('fs');

console.log('start');

// Minuto 1:20
readFile('./content/first.txt', 'utf8', (err,result) => {
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err){
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result.txt',`Here is the result: ${first}, ${second}`,(err, result)=> {
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
    })
  });
});
console.log('starting with the next one');