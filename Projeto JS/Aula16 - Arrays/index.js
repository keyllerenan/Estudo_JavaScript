//                0       1         2        3        4
const alunos = ['Luiz', 'Maria', 'João'] // Luiza, Eduardo
console.log(typeof alunos);

// console.log(alunos instanceof Array); *Se retornar True é um array se or False então não é um array
// console.log(alunos[1]); *Busca a um elemento no arrays
// console.log(alunos[50]); *O JS busca um indíce que não existe e ele retorna como undefined
// console.log(alunos.length); *Ele retorna o tamanho da array
// console.log(alunos.slice(0, 3)); *Ele vai recortar da direta para esquerda (lembrando que o recorte no ex é: o indíce 0, 1, 2)
// console.log(alunos.slice(0, -2)); *Nesse caso o recorte é no négativo, começa da esquerda para direita


// delete.alunos[1]; *O elemento na array vai ser deletado, vale lembrar que o indíce vai ficar vazio
// alunos.pop(); *Ele elimina o ultimo item da array
//      const removido = alunos.pop();
//      const removido = alunos.shift(); *Nesse caso ele elimina o primeiro item da array
// alunos[alunos.length] = 'Fábio'; *Nesse caso está adicionando um item a array
// alunos.push('Otávio'); *Ele adiciona um indíce ao final da sua array
// alunos.unshit('Luiza'); *Ele adiciona um item no começo da sua array (Vale lembrar que os elementos no indíce
//  vão mudar de posição na array)
// alunos[0] = 'Eduardo'; *Subistitui um elemento no array
// alunos[3] = 'Luiza'; *Nesse caso, o elemento não existe então vc criou e adicionou no array


// alunos.push('Luiza')