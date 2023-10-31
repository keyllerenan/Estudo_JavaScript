//               01234567
let umaString = `Um texto`;
let outraString = `O rato roeu a roupa do rei de roma.`

console.log(umaString.charAt(6));
console.log(umaString.concat(` em um lindo dia.`));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3 ));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/o/));
console.log(umaString.replace(/Um/, 'Outro'));

console.log(outraString.replace(/r/g, '#'));
console.log(outraString.length);
console.log(outraString.slice(2, 6));
console.log(outraString.slice(32));
console.log(outraString.slice(-3));
console.log(outraString.slice(-5, outraString.length - 1));
console.log(outraString.slice(-5, -1));
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

console.log(outraString.split(' '));
console.log(outraString.split('r'));
console.log(outraString.split(' ', 3));

console.log(outraString.toUpperCase());
console.log(outraString.toLocaleLowerCase());