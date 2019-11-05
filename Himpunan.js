console.log("┌┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┐")
console.log("┊A = {1,2,5,8,9,10}                       ┊")
console.log("┊B = {4,2,8,10,11,12}                     ┊")
console.log("┊C = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15}┊")
console.log("└┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┘")

var a = [1,2,5,8,9,10]
var b = [4,2,8,10,11,12]
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

var x = require('array-intersection')

var irisan_1 = x(a,b)
console.log("Irisan A dan B :")
console.log(irisan_1)
console.log("┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅")

var irisan_2 = x(b,c)
console.log("Irisan B dan C :")
console.log(irisan_2)
console.log("┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅")

var irisan_3 = x(c,a)
console.log("Irisan C dan A :")
console.log(irisan_3)
console.log("┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅")

var kar1 = a.length
var kar2 = c.length

var z = kar1 + kar2
console.log("Kardinal A + Kardinal C : ")
console.log( z )
console.log("┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅")