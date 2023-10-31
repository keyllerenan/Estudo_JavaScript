// Capturar o evento de sbmit do formulário
const form = document.querySelector('#form');
form.addEventListener('submit', function (e){
    e.preventDefault();
    //console.log('Evendo prevenido.');
    //setResultado('Olá mundo!');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc (peso, altura);
});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade'];

    if (imc >= 39.9){

    } else if (imc >= 34.9){

    }  else if (imc >= 34.9){
        
    } else if (imc >= 34.9){
        
    } else if (imc >= 34.9){
        
    };

    return;
}

function getImc (peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    // p.classList.add('paragrafo-resultado');
    // p.innerHTML = 'Qualquer coisa';
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    // resultado.innerHTML = `<p>${msg}</p>`;
    resultado.innerHTML = '';
    // resultado.appendChild(p);
    const p = criarp();
    p.innerHTML = msg;
    resultado.appendChild(p);
}