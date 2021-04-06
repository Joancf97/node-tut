// Modules on Node js 
// Operating system module
const os = require('os');

// Info about current user 
const user = os.userInfo();

// methor returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// Operating system information
const currentOs = {
  name: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOs);