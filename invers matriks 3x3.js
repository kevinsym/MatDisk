    // Invers Matriks 3x3 //

var matriks_A = [[1,1,1] , [2,4,1] , [2,3,1]]

var a = matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2]
var b = matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0]
var c = matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1]

var x = matriks_A[2][0] * matriks_A[1][1] * matriks_A[0][2]
var y = matriks_A[2][1] * matriks_A[1][2] * matriks_A[0][0]
var z = matriks_A[2][2] * matriks_A[1][0] * matriks_A[0][1]

var sarrus_a = a + b + c
var sarrus_b = x+y+z

var determinan = sarrus_a - sarrus_b
    
    // Minor //

var M11 = matriks_A[1][1] * matriks_A[2][2] - matriks_A[1][2] * matriks_A[2][1]
var M12 = matriks_A[1][0] * matriks_A[2][2] - matriks_A[1][2] * matriks_A[2][0]
var M13 = matriks_A[1][0] * matriks_A[2][1] - matriks_A[1][1] * matriks_A[2][0]

var M21 = matriks_A[0][1] * matriks_A[2][2] - matriks_A[1][2] * matriks_A[2][1]
var M22 = matriks_A[0][0] * matriks_A[2][2] - matriks_A[0][2] * matriks_A[2][0]
var M23 = matriks_A[0][0] * matriks_A[2][1] - matriks_A[0][1] * matriks_A[2][0]

var M31 = matriks_A[0][1] * matriks_A[1][2] - matriks_A[0][2] * matriks_A[1][1]
var M32 = matriks_A[0][0] * matriks_A[1][2] - matriks_A[0][2] * matriks_A[1][0]
var M33 = matriks_A[0][0] * matriks_A[1][1] - matriks_A[0][1] * matriks_A[1][0]

    // Kofaktor //

var k11 = +M11
var k12 = -M12
var k13 = +M13
var k21 = -M21
var k22 = +M22
var k23 = -M23
var k31 = +M31
var k32 = -M32
var k33 = +M33

var n11 = k11/determinan
var n12 = k21/determinan
var n13 = k31/determinan
var n21 = k12/determinan
var n22 = k22/determinan
var n23 = k32/determinan
var n31 = k13/determinan
var n32 = k23/determinan
var n33 = k33/determinan

console.log("╔=================================╗ ")
console.log("|            Matriks A            | ")
console.log("╚=================================╝ ")
console.log("|          | 1  1  1 |            | ")
console.log("|          | 2  4  1 |            | ")
console.log("|          | 2  3  1 |            | ")
console.log("╚=================================╝ ")

console.log("╔=================================╗")
console.log("|     Invers dari Matriks A       |")
console.log("╚=================================╝")
console.log("|          |"+n11 +" " + n12 +"  " + n13+" |            |")
console.log("|          | "+n21 +"  " + n22 +" " + n23+" |            |")
console.log("|          | "+n31 +"  " + n32 +" " + n33+" |            |")
console.log("╚=================================╝")
