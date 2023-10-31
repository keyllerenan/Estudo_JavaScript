/* 
Operadores de comparação

> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
= Atribuição
==Igualdade (Valor) **************
===igualdade estrita (Valor e tipo)
!= Diferente (Valor) **************
!== Diferente estrito (Valor e tipo)
*/

const comp = 10 > 5;
console.log(comp);

const num1 = 10; //Number
const num2 = '10'; //String
const compa = num1 == num2;
console.log(compa); //Nesse caso o Js converte automaticamente o tipo do dado, tome cuidado! Você que precisa fazer a conversão.

const num3 = 8;
const num4 = '8';
const compar = num3 === num4;
console.log(compar); //Aqui ele compara o valor e tipo, então é recomendado utilizar essa operação de comparação.

const num5 = 6;
const num6 = '6';
const compara = num5 != num6;
console.log(compara);