    // Determinan Matriks 4x4 //

var matriks_A = [[3,2,0,0] , [4,3,0,0] , [0,0,6,5] , [0,0,7,6]]
console.log("╔=================================╗ ")
console.log("|            Matriks A            | ")
console.log("╚=================================╝ ")
console.log("|          | 3  2  0  0 |         | ")
console.log("|          | 4  3  0  0 |         | ")
console.log("|          | 0  0  6  5 |         | ")
console.log("|          | 0  0  7  6 |         | ")
console.log("╚=================================╝ ")

console.log("             Nilai A1")
var a = (matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2] * matriks_A[3][3])
       -(matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][3] * matriks_A[3][0])
       +(matriks_A[0][2] * matriks_A[1][3] * matriks_A[2][0] * matriks_A[3][1])
       -(matriks_A[0][3] * matriks_A[1][0] * matriks_A[2][1] * matriks_A[3][2])
       -(matriks_A[0][0] * matriks_A[1][3] * matriks_A[2][2] * matriks_A[3][1])
       +(matriks_A[0][1] * matriks_A[1][0] * matriks_A[2][3] * matriks_A[3][2])
       -(matriks_A[0][2] * matriks_A[1][1] * matriks_A[2][0] * matriks_A[3][3])
       +(matriks_A[0][3] * matriks_A[1][2] * matriks_A[2][1] * matriks_A[3][0])


console.log("               "+ a)
console.log("===================================") 


console.log("             Nilai A2")

var b =-(matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][3] * matriks_A[3][2])
       +(matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0] * matriks_A[3][3])
       -(matriks_A[0][2] * matriks_A[1][3] * matriks_A[2][1] * matriks_A[3][0])
       +(matriks_A[0][3] * matriks_A[1][0] * matriks_A[2][2] * matriks_A[3][1])
       +(matriks_A[0][0] * matriks_A[1][3] * matriks_A[2][1] * matriks_A[3][2])
       -(matriks_A[0][1] * matriks_A[1][0] * matriks_A[2][2] * matriks_A[3][3])
       +(matriks_A[0][2] * matriks_A[1][1] * matriks_A[2][3] * matriks_A[3][0])
       -(matriks_A[0][3] * matriks_A[1][2] * matriks_A[2][0] * matriks_A[3][1])


console.log("               "+ b)
console.log("===================================") 

console.log("             Nilai A3")

var c = (matriks_A[0][0] * matriks_A[1][2] * matriks_A[2][3] * matriks_A[3][1])
       -(matriks_A[0][1] * matriks_A[1][3] * matriks_A[2][0] * matriks_A[3][2])
       +(matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1] * matriks_A[3][3])
       -(matriks_A[0][3] * matriks_A[1][1] * matriks_A[2][2] * matriks_A[3][0])
       -(matriks_A[0][0] * matriks_A[1][2] * matriks_A[2][1] * matriks_A[3][3])
       +(matriks_A[0][1] * matriks_A[1][3] * matriks_A[2][2] * matriks_A[3][0])
       -(matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][3] * matriks_A[3][1])
       +(matriks_A[0][3] * matriks_A[1][1] * matriks_A[2][0] * matriks_A[3][2])


console.log("               "+ c)

var determinan = a + b + c

console.log("===================================") 
console.log("        Determinan Matriks A     ")
console.log("A1 + A2 + A3 = " + determinan)
console.log("===================================")
