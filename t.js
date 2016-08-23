let fs = require('fs')

let res = fs.readdirSync(process.cwd() + '\/node_modules')
console.log(res.join(' '))