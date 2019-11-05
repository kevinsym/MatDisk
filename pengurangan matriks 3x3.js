    // Pengurangan Matriks 3x3 //
var Matriks_A = [[1,1,1] , [2,4,1] , [2,3,1]]
var Matriks_B = [[1,2,1] , [4,6,3] , [1,6,5]]

var n1= Matriks_A[0][0]-Matriks_B[0][0]
var n2= Matriks_A[0][1]-Matriks_B[0][1]
var n3= Matriks_A[0][2]-Matriks_B[0][2]
var n4= Matriks_A[1][0]-Matriks_B[1][0]
var n5= Matriks_A[1][1]-Matriks_B[1][1]
var n6= Matriks_A[1][2]-Matriks_B[1][2]
var n7= Matriks_A[2][0]-Matriks_B[2][0]
var n8= Matriks_A[2][1]-Matriks_B[2][1]
var n9= Matriks_A[2][2]-Matriks_B[2][2]


console.log("╔=================================╗       ╔=================================╗")
console.log("|          Matriks A              |       |          Matriks B              |")
console.log("╚=================================╝       ╚=================================╝")
console.log("|          | 1  1  1 |            |       |          | 1  2  1 |            |")
console.log("|          | 2  4  1 |            |       |          | 4  6  3 |            |")
console.log("|          | 2  3  1 |            |       |          | 1  6  5 |            |")
console.log("╚=================================╝       ╚=================================╝")


console.log("                    ╔=================================╗")
console.log("                    |          Matriks A-B            |")
console.log("                    ╚=================================╝")
console.log("                    |          | "+n1 +" " + n2 +"   " + n3+" |           |")
console.log("                    |          |"+n4 , n5 +"  " + n6+" |           |")
console.log("                    |          | "+n7 +" " + n8 +"  " + n9+" |           |")
console.log("                    ╚=================================╝")