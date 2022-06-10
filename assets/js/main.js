// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toString();

// function getDiaSemanaTexto(diaSemana) {
//   let getDiaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = 'Domingo';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'Segunda';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'Terça';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'Quarta';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = '5';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'Sexta';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'Sábado';
//       return diaSemanaTexto;

//     default:
//       diaSemanaTexto = 'Dia inválido';
//   }
// }

// function getNomeMes(numeroMes) {
//   let nomeMes;

//   switch (numeroMes) {
//     case 0:
//       nomeMes = 'janeiro';
//       return nomeMes;
//     case 1:
//       nomeMes = 'fevereiro';
//       return nomeMes;
//     case 2:
//       nomeMes = 'março';
//       return nomeMes;
//     case 3:
//       nomeMes = 'abril';
//       return nomeMes;
//     case 4:
//       nomeMes = 'maio';
//       return nomeMes;
//     case 5:
//       nomeMes = 'junho';
//       return nomeMes;
//     case 6:
//       nomeMes = 'julho';
//       return nomeMes;

//     case 6:
//       nomeMes = 'agosto';
//       return nomeMes;
//     case 6:
//       nomeMes = 'setembro';
//       return nomeMes;
//     case 6:
//       nomeMes = 'outubro';
//       return nomeMes;
//     case 6:
//       nomeMes = 'novembro';
//       return nomeMes;
//     case 6:
//       nomeMes = 'dezembro';
//       return nomeMes;

//     default:
//       nomeMes = 'Dia inválido';
//   }
// }

// function ZeroEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();
//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${ZeroEsquerda(
//       data.getFullYear()
//     )}<br>${data.getHours()}:${ZeroEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaData(data);

function ZeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {
  dateStyle: 'full',
});

const h2 = document.querySelector('.container h2');
const hora = new Date();
h2.innerHTML = `${ZeroEsquerda(hora.getHours())}:${ZeroEsquerda(
  hora.getMinutes()
)}:${ZeroEsquerda(hora.getSeconds())}`;
