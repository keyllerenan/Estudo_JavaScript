/* 
Operadores Lógicos
&& -> AND -> E -> Todos as expressões precisam ser verdadeiras para retornar true
|| -> or -> OU
! -> NOT -> NÃO
*/

// Const expressaoAnd = true && true && tru3 && true;
// const expressaoOr = false || false || false || false;

//const usuario = 'Luiz'; // form do usuario digitou
//const senha = '123456';   // form do usuario digitou

//const logar = usuario === 'Luiz' && senha === '12345';
//console.log(logar);

const usuario = 'Luiz';
const senha = '123456';

const logar = usuario === 'Luiz' || senha === '12345';
console.log(logar);

