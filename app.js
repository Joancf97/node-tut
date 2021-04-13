// Promises

const p1 = Promise.resolve(1);

p1
.then(x => x + 7)
.then(y => Promise.resolve(y + 4))
.then(x => console.log(x))