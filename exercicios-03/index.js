// Exercício 1
// Dia da semana
diaDaSemana = prompt('Olá, que dia é hoje?');
console.log(diaDaSemana);

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}

// Resolução
// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }


// Exercício 2
numero = prompt('Olá, digite um número!');
console.log(numero);

if (numero >= 0) {
    alert('O número ' + numero + ' é posítivo.')
} else {
    alert('O número ' + numero + ' é negativo.')
}

// Exercício 3
let pontuacao = 99;
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

// Exercício 4
let saldoDaConta = 1300;
alert(`O saldo da sua conta é de R$${saldoDaConta}`);

// Exercício 5
nome = prompt('Por favor insira o seu nome:');
alert(`Bem-vindo, ${nome}!`)