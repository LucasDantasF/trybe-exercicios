// let menu = ["home", "servicoes", "portifolio", 'links'];
// menu.push('contato');

// for (let index = 0; index < menu.length; index += 1){
//    console.log(menu[index]);
// } 

// ==================================================================================

// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
  // console.log(numero);
// }

// let names = ['Joao', 'Lucas', 'Fernando', 'Daniel'];
// for(let index of names) {
//    console.log(index);
// }

// ===========================================================


// let d1 = Math.ceil(Math.random() * 6);
// console.log('resultado d1:', d1);
// let d2 = Math.ceil(Math.random() * 6);
//
//while (d1 !== d2) {
  //d2 = Math.ceil(Math.random() * 6);
  //console.log('resultado d2:', d2);
//}

let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);