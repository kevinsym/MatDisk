var a = [[8,12],[4,7],[6,6]]
var b = [[7,10],[3,9],[8,5]]

var waktu_a = a[0][1] + a[1][1] + a[2][1]
var waktu_b = b[0][1] + b[1][1] + b[2][1]

if (waktu_a < waktu_b) {
    console.log("╔════════════════╦══════════════════╦═════════════════════╗")
    console.log("║                ║  Waktu Tercepat  ║                     ║")
    console.log("║                ╚══════════════════╝                     ║")
    console.log("║ Waktu Tercepat adalah Rute Atas dengan Waktu tempuh " +waktu_a  + " ║")
    console.log("╚═════════════════════════════════════════════════════════╝")

    console.log("╔════════════════╦══════════════════╦═════════════════════╗")
    console.log("║                ║  Waktu Terlama   ║                     ║")
    console.log("║                ╚══════════════════╝                     ║")
    console.log("║ Waktu Terlama adalah Rute Bawah dengan Waktu tempuh " +waktu_b  + "  ║")
    console.log("╚═════════════════════════════════════════════════════════╝")
} else {
    console.log("╔════════════════╦══════════════════╦═════════════════════╗")
    console.log("║                ║  Waktu Tercepat  ║                     ║")
    console.log("║                ╚══════════════════╝                     ║")
    console.log("║ Waktu Tercepat adalah Rute Bawah dengan Waktu tempuh " +waktu_b  + " ║")
    console.log("╚═════════════════════════════════════════════════════════╝")

    console.log("╔════════════════╦══════════════════╦═════════════════════╗")
    console.log("║                ║  Waktu Terlama   ║                     ║")
    console.log("║                ╚══════════════════╝                     ║")
    console.log("║ Waktu Terlama adalah Rute Atas dengan Waktu tempuh " +waktu_a  + "   ║")
    console.log("╚═════════════════════════════════════════════════════════╝")
}

