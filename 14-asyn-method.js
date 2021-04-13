
const {readFile} = require("fs");

// non bllking way
const getText = (path) => {
  return new  Promise ((resolve, reject) => {
    readFile(path, 'utf8',((err, data)=>{
      if(err){
        reject(err);
      }
        resolve(data);
    }));
  })
}

// Async way of reading files 
const start = async () => {
  try {
    const first = await getText('./content/first.txt');
    const second = await getText('./content/second.txt');
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}

start();

// getText('./content/first.txt')
//   .then(result => {console.log("A" + result)})
//   .catch(err => {console.log(err)});

// // Bloking way 
// readFile('./content/first.txt', 'utf8',((err, data)=>{
//   if(err){
//     return;
//   }
//   console.log(data);
// }));

// Minuto 3:06:20