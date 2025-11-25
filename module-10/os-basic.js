const os = require("os");

console.log("System info \n");
console.log("-".repeat(50));

// window
console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS Type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("-".repeat(50));

// CPU
console.log("\nCPU Information : ");
const cpus = os.cpus();
console.log("CPU Model: ", cpus[0].model);
console.log("Number of cores: ", cpus.length);
console.log("CPU Speed: ", cpus[0].speed);

console.log("-".repeat(50));

// Ram
const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log("Total Memory: ", (totalMem / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free Memory: ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("-".repeat(50));

// uptime
const uptime = os.uptime();
const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60); 

console.log(`${days} days ${hours} hours ${minutes} minutes`);