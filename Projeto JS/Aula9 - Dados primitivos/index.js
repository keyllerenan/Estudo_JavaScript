// String, number, underfined, null, boolean e symbol
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; //underfined -> Não aponta para nenhum local na memória
const sobrenomeAluno = null; // Nulo -> Não apojta para nenhum local na memória 
const aprovado = true; // Boolean = true ou false (lógico)

const a = [1, 2];
const b = a;

console.log(a, b);

console.log(a,b); // 2, 2
a = 3;
console.log(a, b); // 3, 2