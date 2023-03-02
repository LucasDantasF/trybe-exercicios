// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda-feira',
//     3: 'terca-feira',
//     4: 'quarta-feira',
//     5: 'quinta-feira',
//     6: 'sexta-feira',
//     7: 'sabado',
// };

// diasDaSemana.1;
// console.log(diasDaSemana['1']);

// ===============================================================

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'jake',
        sobrenome: 'peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
    },
},
console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque