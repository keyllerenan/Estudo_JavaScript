let nome = 'João'; //String
/*
let nome; Declarou a variável
nome = 'Qualquer valor'; Inicializando a variável
console.log(nome);
*/

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

//Não podemos declarar uma variável já declarada
//Variáveis precisam ter nomes significativos
//Não pode começar o nome de variável com um número
//Case-sensitive
let nomeCliente = 'Luiz';
let nomecliente = 'Otávio';
console.log(nomeCliente, nomecliente);
//Nunca utilize VAR sempre utilize LET
//Não podem conter espaços ou traços
//Utilizamos camelCase
let nomeCompletoDoCliente = 'Luiz Otávio';
//Não podemos redeclarar variáveis com let
//Não UTILIZE VAR, UTILIZE LET.