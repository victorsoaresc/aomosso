let user = window.prompt("qual o seu nome?");

const respostas = [
  `${user}, aguente um pouco mais, o horário de almoço ainda não chegou.`,
  `${user}, vamos esperar mais um pouco, ainda não é hora do almoço.`,
  `${user}, por favor, tenha paciência, o almoço ainda está longe.`,
  `${user}, falta um pouco para o almoço, aguente firme!`,
  `${user}, espere um pouco mais, ainda não é hora de comer.`,
  `${user}, calma! O almoço ainda não está pronto.`,
  `${user}, aguarde mais um pouco, o horário de almoço está chegando.`,
  `${user}, vamos esperar um pouco mais, o almoço ainda não foi servido.`,
  `${user}, tenha um pouco de paciência, o almoço está quase pronto.`,
  `${user}, ainda não é hora do almoço, espere um pouco mais.`,
  `${user}, aguente firme, o almoço ainda vai demorar um pouco.`,
  `${user}, por favor, espere mais um pouco, o horário de almoço ainda não chegou.`,
  `${user}, o almoço está quase chegando, mas ainda não é hora.`,
  `${user}, vamos esperar mais um pouco, o almoço não tardará.`,
  `${user}, tenha paciência, o almoço ainda não está pronto.`,
  `${user}, aguente um pouco mais, o horário de almoço ainda não começou.`,
  `${user}, ainda falta um pouco para o almoço, vamos esperar.`,
  `${user}, o almoço está chegando, mas ainda não é hora.`,
  `${user}, por favor, espere mais um pouco, o almoço está próximo.`,
  `${user}, aguente firme, o almoço ainda vai demorar um pouco.`
];

function respostaBTN(){
    const random = Math.floor(Math.random() * respostas.length);
    document.getElementById("resposta").innerHTML= respostas[random];
}