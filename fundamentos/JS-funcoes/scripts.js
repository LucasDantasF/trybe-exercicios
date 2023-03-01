// function cumprimentarCliente(cliente) {
//   return 'ola,' + cliente + '. Essa é sua conta do TrybeBank'
//}
// console.log(cumprimentarCliente('lucas')) 

// ===========================================================

// let saldo = 100;

// function somarSaldo(valor) {
//     return valor + saldo;
// };

// function subtrairSaldo(valor) {
//     return saldo - valor;
// };

// function multiplicarSaldo(valor) {
//     return valor * saldo;
// };

// function dividirSaldo(valor) {
//     return saldo / valor;
// };

// console.log(somarSaldo(300));
// console.log(subtrairSaldo(300));
// console.log(multiplicarSaldo(300));
// console.log(dividirSaldo(300));

// ============================================================

// let clientesTrybeBank = ['Lucas', 'Rodrigo', 'Hadassa'];
// function adicionarCliente(cliente) {
//     if (typeof cliente === 'string'){
//         clientesTrybeBank.push(cliente);
//         return 'Cliente adicionada(o) com sucesso!';
//     }else{
//         return 'O parâmetro passado deve ser do tipo "string"'
//     }
// }
// console.log(adicionarCliente(true));
// console.log(adicionarCliente('Roberto'));
// console.log(clientesTrybeBank);

// ==================================================================

let clientesTrybeBank = ['Lucas', 'Rodrigo', 'Dani']

function removerCliente(cliente) {
    let clienteEncontrado = false;
    if(typeof cliente === 'string'){
        for (let index = 0; index < clientesTrybeBank.length; index += 1){
if (cliente === clienteEncontrado[index]){
    clientesTrybeBank.splice(index, 1);
    clienteEncontrado = true;
    return 'Cliente excluída(o) com sucesso.'
}
        }
        if (clienteEncontrado === false){
        return 'Cliente não encontrada(o)'
        }
    }else{
        return 'O parâmetro passado deve ser do tipo "string"'
    }

};
console.log(removerCliente(false));
console.log(removerCliente('Barney')); 
console.log(removerCliente('John')); 
console.log(clientesTrybeBank); 