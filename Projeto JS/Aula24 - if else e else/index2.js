const numero = 5;
const numero2 = 13;

if(numero >= 0 && numero <= 5){
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número NÃO está entre 0 e 5.')
}

if(numero2 >= 0 && numero2 <= 5){
    console.log('O número está entre 0 e 5.');
} else if (numero2 >= 6 && numero2 <= 8) {
    console.log('O número NÃO está entre 6 e 8.');
} else if (numero2 >= 9 && numero2 <= 11){
    console.log('O número NÃO está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 13.')
}

// Não esquecer que uma condição for verdadeira o resto da linha de código não será executada.
// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {o código}