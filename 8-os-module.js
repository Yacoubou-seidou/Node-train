const os = require("os");
//info current user
const user = os.userInfo();
console.log(user);
//method return system uptime in sec
console.log(`the systeme uptime is ${os.uptime()} sec`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
