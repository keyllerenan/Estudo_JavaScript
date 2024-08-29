function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemana = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemana = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemana = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemana = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemana = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemana = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemana = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const data = new Date('2001-05-07 12:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);