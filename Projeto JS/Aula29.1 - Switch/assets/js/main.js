const h1 = document.querySelector('.containerh1');
const data = new Date();
h1.innerHTML = data.toDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});