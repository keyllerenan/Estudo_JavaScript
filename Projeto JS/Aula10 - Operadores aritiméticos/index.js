/* 
 - Aritméticos
 - + Adição / Concatenação (- / *)
 - ** Potenciação
 - % Resto da divisão
 ---------------------------------
 1 ()
 2 **
 3 * / %
 4 + -
 ----------------------------------
 Incremento = ++
 Decremento = --
 */

const num1 = 10;
const num2 = 3;
const num3 = 10;
console.log((num1 + num2) * num3);
console.log(num1 % num2);

/*
let contador;
    contador++;
    contador++;
    console.log(contador);
*/
const passo = 50;
let contador = 0;
/*
    contador = contador + passo;
    console.log(contador);
    contador = contador + passo;
    console.log(contador);
    contador = contador + passo;
    console.log(contador);
*/
contador += passo; // contador = contador + 50;
// contador += 2;

// NaN - Not a number 
// parseInt (inteiro)
// parseFloat (decimais)
const num6 = 10;
const num7 = parseInt('5');
const num8 = parseFloat('5.2');
console.log(num6 + num7);
console.log(typeof num7);
console.log(typeof num8);