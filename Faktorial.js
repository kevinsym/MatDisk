var key, n, x 
key = require('readline-sync')
n   = parseInt(key.question("Masukkan n! = "))
var a = 1
for (x=1;x<=n;x++) {
    a = a * x
}
console.log (n +"! adalah " + a)
