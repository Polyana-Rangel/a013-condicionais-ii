
const num = Number(prompt("digite um numero"))

// if (num % 2 === 0) {

//    console.log(" por 2")
//    if (num % 3 === 0) {

//       console.log("esse numero é divisivel por 3 ")

//    }
// } else if (numero % 3 === 0) {
//    console.log(' é divisivel por 3')
//    console.log("nao é divisivel por 2")
// }

if (num % 2 === 0 || num % 3 === 0) {
   console.log("é divisivel por 2 ou 3")
} else {
   console.log("nao é divisivel 2  ou 3")
}