// function cumprimentarCliente(cliente) {
//   return 'ola,' + cliente + '. Essa é sua conta do TrybeBank'
//}
// console.log(cumprimentarCliente('lucas')) 

// ===========================================================

let saldo = 100;

function somarSaldo(valor) {
    return valor + saldo;
};

function subtrairSaldo(valor) {
    return saldo - valor;
};

function multiplicarSaldo(valor) {
    return valor * saldo;
};

function dividirSaldo(valor) {
    return saldo / valor;
};

console.log(somarSaldo(300));
console.log(subtrairSaldo(300));
console.log(multiplicarSaldo(300));
console.log(dividirSaldo(300));