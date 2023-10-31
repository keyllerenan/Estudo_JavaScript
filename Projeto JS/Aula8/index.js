/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg e tem 1.80 de altura e seu IMC é de 25.925925925925924.
Luiz Otávio nasceu em 1990 */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //peso / (altura * altura)
let anoNascimento;
const date = new Date('Jul 04 2023');
const currentYear = date.getFullYear();

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = currentYear - 1993;
//anoNascimento = 2023 - 30

console.log(imc);
console.log(anoNascimento); //2023

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
 