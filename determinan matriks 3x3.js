    // Determinan Matriks 3x3 //

var matriks_A = [[1,1,1] , [2,4,1] , [2,3,1]]

var a = matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2]
var b = matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0]
var c = matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1]

var x = matriks_A[2][0] * matriks_A[1][1] * matriks_A[0][2]
var y = matriks_A[2][1] * matriks_A[1][2] * matriks_A[0][0]
var z = matriks_A[2][2] * matriks_A[1][0] * matriks_A[0][1]

var n11 = a+b+c
var n12 = x+y+z

var Determinan = n11 - n12

console.log("╔=================================╗ ")
console.log("|            Matriks A            | ")
console.log("╚=================================╝ ")
console.log("|          | 1  1  1 |            | ")
console.log("|          | 2  4  1 |            | ")
console.log("|          | 2  3  1 |            | ")
console.log("╚=================================╝ ")

console.log("===================================")
console.log("        Determinan Matriks A     ")
console.log("===================================")
console.log("               " + Determinan)
console.log("===================================")

