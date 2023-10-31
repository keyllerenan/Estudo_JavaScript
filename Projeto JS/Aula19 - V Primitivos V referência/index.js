/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) - Valor dopiados
Referência (mutável) - array, object, function - Passados por referência
*/

/*
//          0123
let nome = 'Luiz';
//nome = 'Otávio';
//nome[0] = 'R';
console.log(nome[0]);

let a = [1, 2, 3];
let b = [...a]; //Cópia
let c = b;
console.log(a, b);

//c = 'Outra coisa';
//console.log(c, d);

c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

a.push('Luiz');
console.log(c); */

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);