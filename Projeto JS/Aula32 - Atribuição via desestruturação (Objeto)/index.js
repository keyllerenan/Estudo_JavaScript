const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereci: {
        rua: 'Avenida JK',
        numero: 500
    }
};

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);