       // Invers Matriks 4x4 //

var matriks_A  = [[3,2,0,0] , [4,3,0,0] , [0,0,6,5] , [0,0,7,6]]

console.log("================ DETERMINAN ===============");

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

console.log("================= INVERS ==================");

console.log("                    ╔=================================╗ ")
console.log("                    |            Matriks A            | ")
console.log("                    ╚=================================╝ ")
console.log("                    |          | 3  2  0  0 |         | ")
console.log("                    |          | 4  3  0  0 |         | ")
console.log("                    |          | 0  0  6  5 |         | ")
console.log("                    |          | 0  0  7  6 |         | ")
console.log("                    ╚=================================╝ ")
console.log("=:=:=MINOR -> KOFAKTOR -> ADJOIN=:=:=");

//Minor KOLOM 1
var n1 = ( ((matriks_A[1][1] * matriks_A[2][2] * matriks_A[3][3]) + (matriks_A[1][2] * matriks_A[2][3] * matriks_A[3][1]) + (matriks_A[1][3] * matriks_A[2][1] * matriks_A[3][2])) -
              ((matriks_A[3][1] * matriks_A[2][2] * matriks_A[1][3]) + (matriks_A[3][2] * matriks_A[2][3] * matriks_A[1][1]) + (matriks_A[3][3] * matriks_A[2][1] * matriks_A[1][2])) );

var n5 = -( ((matriks_A[1][0] * matriks_A[2][2] * matriks_A[3][3]) + (matriks_A[1][2] * matriks_A[2][3] * matriks_A[3][0]) + (matriks_A[1][3] * matriks_A[2][0] * matriks_A[3][2])) -
              ((matriks_A[3][0] * matriks_A[2][2] * matriks_A[1][3]) + (matriks_A[3][2] * matriks_A[2][3] * matriks_A[1][0]) + (matriks_A[3][3] * matriks_A[2][0] * matriks_A[1][2])) );

var n9 = ( ((matriks_A[1][0] * matriks_A[2][1] * matriks_A[3][3]) + (matriks_A[1][1] * matriks_A[2][3] * matriks_A[3][0]) + (matriks_A[1][3] * matriks_A[2][0] * matriks_A[3][1])) -
              ((matriks_A[3][0] * matriks_A[2][1] * matriks_A[1][3]) + (matriks_A[3][1] * matriks_A[2][3] * matriks_A[1][0]) + (matriks_A[3][3] * matriks_A[2][0] * matriks_A[1][1])) );

var n13 = -( ((matriks_A[1][0] * matriks_A[2][1] * matriks_A[3][2]) + (matriks_A[1][1] * matriks_A[2][2] * matriks_A[3][0]) + (matriks_A[1][2] * matriks_A[2][0] * matriks_A[3][1])) -
              ((matriks_A[3][0] * matriks_A[2][1] * matriks_A[1][2]) + (matriks_A[3][1] * matriks_A[2][2] * matriks_A[1][0]) + (matriks_A[3][2] * matriks_A[2][0] * matriks_A[1][1])) );

//Minor KOLOM 2
var n2 = -( ((matriks_A[0][1] * matriks_A[2][2] * matriks_A[3][3]) + (matriks_A[0][2] * matriks_A[2][3] * matriks_A[3][1]) + (matriks_A[0][3] * matriks_A[2][1] * matriks_A[3][2])) -
              ((matriks_A[3][1] * matriks_A[2][2] * matriks_A[0][3]) + (matriks_A[3][2] * matriks_A[2][3] * matriks_A[0][1]) + (matriks_A[3][3] * matriks_A[2][1] * matriks_A[0][2])) );

var n6 = ( ((matriks_A[0][0] * matriks_A[2][2] * matriks_A[3][3]) + (matriks_A[0][2] * matriks_A[2][3] * matriks_A[3][0]) + (matriks_A[0][3] * matriks_A[2][0] * matriks_A[3][2])) -
              ((matriks_A[3][0] * matriks_A[2][2] * matriks_A[0][3]) + (matriks_A[3][2] * matriks_A[2][3] * matriks_A[0][0]) + (matriks_A[3][3] * matriks_A[2][0] * matriks_A[0][2])) );

var n10 = -( ((matriks_A[0][0] * matriks_A[2][1] * matriks_A[3][3]) + (matriks_A[0][1] * matriks_A[2][3] * matriks_A[3][0]) + (matriks_A[0][3] * matriks_A[2][0] * matriks_A[3][1])) -
              ((matriks_A[3][0] * matriks_A[2][1] * matriks_A[0][3]) + (matriks_A[3][1] * matriks_A[2][3] * matriks_A[0][0]) + (matriks_A[3][3] * matriks_A[2][0] * matriks_A[0][1])) );

var n14 = ( ((matriks_A[0][0] * matriks_A[2][1] * matriks_A[3][2]) + (matriks_A[0][1] * matriks_A[2][2] * matriks_A[3][0]) + (matriks_A[0][2] * matriks_A[2][0] * matriks_A[3][1])) -
              ((matriks_A[3][0] * matriks_A[2][1] * matriks_A[0][2]) + (matriks_A[3][1] * matriks_A[2][2] * matriks_A[0][0]) + (matriks_A[3][2] * matriks_A[2][0] * matriks_A[0][1])) );

//Minor KOLOM 3
var n3 = ( ((matriks_A[0][1] * matriks_A[1][2] * matriks_A[3][3]) + (matriks_A[0][2] * matriks_A[1][3] * matriks_A[3][1]) + (matriks_A[0][3] * matriks_A[1][1] * matriks_A[3][2])) -
              ((matriks_A[3][1] * matriks_A[1][2] * matriks_A[0][3]) + (matriks_A[3][2] * matriks_A[1][3] * matriks_A[0][1]) + (matriks_A[3][3] * matriks_A[1][1] * matriks_A[0][2])) );

var n7 = -( ((matriks_A[0][0] * matriks_A[1][2] * matriks_A[3][3]) + (matriks_A[0][1] * matriks_A[1][3] * matriks_A[3][0]) + (matriks_A[0][3] * matriks_A[1][0] * matriks_A[3][2])) -
              ((matriks_A[3][0] * matriks_A[1][2] * matriks_A[0][3]) + (matriks_A[3][1] * matriks_A[1][3] * matriks_A[0][0]) + (matriks_A[3][3] * matriks_A[1][0] * matriks_A[0][2])) );

var n11 = ( ((matriks_A[0][0] * matriks_A[1][1] * matriks_A[3][3]) + (matriks_A[0][1] * matriks_A[1][3] * matriks_A[3][0]) + (matriks_A[0][3] * matriks_A[1][0] * matriks_A[3][1])) -
              ((matriks_A[3][0] * matriks_A[1][1] * matriks_A[0][3]) + (matriks_A[3][1] * matriks_A[1][3] * matriks_A[0][0]) + (matriks_A[3][3] * matriks_A[1][0] * matriks_A[0][1])) );

var n15 = -( ((matriks_A[0][0] * matriks_A[1][1] * matriks_A[3][2]) + (matriks_A[0][1] * matriks_A[1][2] * matriks_A[3][0]) + (matriks_A[0][2] * matriks_A[1][0] * matriks_A[3][1])) -
              ((matriks_A[3][0] * matriks_A[1][1] * matriks_A[0][2]) + (matriks_A[3][1] * matriks_A[1][2] * matriks_A[0][0]) + (matriks_A[3][2] * matriks_A[1][0] * matriks_A[0][1])) );

//Minor KOLOM 4
var n4 = -( ((matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][3]) + (matriks_A[0][2] * matriks_A[1][3] * matriks_A[2][1]) + (matriks_A[0][3] * matriks_A[1][1] * matriks_A[2][2])) -
              ((matriks_A[2][1] * matriks_A[1][2] * matriks_A[0][3]) + (matriks_A[2][2] * matriks_A[1][3] * matriks_A[0][1]) + (matriks_A[2][3] * matriks_A[1][1] * matriks_A[0][2])) );

var n8 = ( ((matriks_A[0][0] * matriks_A[1][2] * matriks_A[2][3]) + (matriks_A[0][1] * matriks_A[1][3] * matriks_A[2][0]) + (matriks_A[0][3] * matriks_A[1][0] * matriks_A[2][2])) -
              ((matriks_A[2][0] * matriks_A[1][2] * matriks_A[0][3]) + (matriks_A[2][1] * matriks_A[1][3] * matriks_A[0][0]) + (matriks_A[2][3] * matriks_A[1][0] * matriks_A[0][2])) );

var n12 = -( ((matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][3]) + (matriks_A[0][1] * matriks_A[1][3] * matriks_A[2][0]) + (matriks_A[0][3] * matriks_A[1][0] * matriks_A[2][1])) -
              ((matriks_A[2][0] * matriks_A[1][1] * matriks_A[0][3]) + (matriks_A[2][1] * matriks_A[1][3] * matriks_A[0][0]) + (matriks_A[2][3] * matriks_A[1][0] * matriks_A[0][1])) );

var n16 = ( ((matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2]) + (matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0]) + (matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1])) -
              ((matriks_A[2][0] * matriks_A[1][1] * matriks_A[0][2]) + (matriks_A[2][1] * matriks_A[1][2] * matriks_A[0][0]) + (matriks_A[2][2] * matriks_A[1][0] * matriks_A[0][1])) );
/*Kofaktor
        +   -   +   -
        -   +   -   +
        +   -   +   -
        -   +   -   +
*/
//adjoin
console.log("                    ╔=================================╗")
console.log("                    |          Adjoin Matriks A       |")
console.log("                    ╚=================================╝")
console.log("                    |          |"+n1+" "+n2+" "+n3+" "+n4+" |            |")
console.log("                    |          |"+n5+" "+n6+" "+n7+" "+n8+" |            |")
console.log("                    |          |"+n9+" "+n10+" "+n11+" "+n12+" |            |")
console.log("                    |          |"+n13+" "+n14+" "+n15+" "+n16+" |            |")
console.log("                    ╚=================================╝")


console.log("=:=:=ADJOIN DI BAGI HASIL DETERMINAN=:=:=");
//INVERS = Adjoin / Determinan
console.log((n1/determinan),(n2/determinan),(n3/determinan),(n4/determinan));
console.log((n5/determinan),(n6/determinan),(n7/determinan),(n8/determinan));
console.log((n9/determinan),(n10/determinan),(n11/determinan),(n12/determinan));
console.log((n13/determinan),(n14/determinan),(n15/determinan),(n16/determinan));

console.log("===========================================");