function saudacao(nome) {
    // console.log(`Bom dia ${nome}!`)
    return `Bom dia ${nome}!`;
}

saudacao('Luiz');
// saudacao('Maria');
// saudacao('Felipe');

const variavel = saudacao('Luiz');
console.log(variavel);

function soma(x, y){
    const resultado = x + y;
    return resultado
}
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

const resultado = soma('luiz' + ' Otávio');
console.log(resultado)

/*function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado
}

const resultado = soma(4)
console.log(resultado)*/

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

/*const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25)); */