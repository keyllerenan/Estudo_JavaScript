/* 
Operadores Lógicos
&& -> AND //Todos as expressões precisam ser verdadeiras para retornar true (Momento que achar a expressão false acaba a verificação)
|| -> or  //true && false -> Vai retornar o "o valor verdadeiro"

FALSY
*false -> False literal { 0 - '' "" `` - null / underfined - NaN } Qualquer coisa diferente disso avalia em true no JS
*/

console.log('Luiz Otávio' && 0 && 'Maria'); //O JS executa e retorna o primeiro valor False ou a ultimo valor da expressão.
console.log('Luiz' && 'Maria'); //true
console.log('Luiz' && '' && 'Maria'); //false

function falaOi (){
    return 'Oi';
}
const vaiExecutar = 'Joãozinho';
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Luiz Otávio' || true); //o OR retorna o primeiro valor verdadeiro

const corUsuario = null;
//const corPadrao = 'red';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);