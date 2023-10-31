const array = [1, 2, 3];
array.push(4);
array [0];
console.log(array);

/*
let array = [1, 2, 3];
array.push(4);
//array [0];
array[0] = 'Luiz';
array = 'Outra'
console.log(array); */

const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi e sua idade é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoal.fala();