const fs=require('fs');
const addUser=require('./addUser.js');
addUser("Taniya","BCA");
addUser("Tanu","BCA");
fs.readFileSync("users.json","utf-8");
