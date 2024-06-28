let user = window.prompt("qual o seu nome?");

const respostas = [
    "Te aquieta, "+ user +", vai arrumar o que fazer.",
    "Calma,"+ user +", já estamos na reta final!",
    "Não se preocupe, "+ user +", estamos quase terminando!",
    "Mantenha a calma," + user +", está quase pronto!",
    "Segure firme," + user +", está quase acabando!",
    "Aguente firme," + user +", estamos quase no fim!",
    "Falta pouco," + user +", já vamos conseguir!",
    "Tranquilize-se," + user +", está quase concluído!",
    "Calma," + user +", a espera está quase no fim!",
    "Paciência," + user +", falta só um pouquinho!",
    "Fique calmo," + user +", está quase finalizado!",
    "Não desanime," + user +", falta bem pouco!",
    "Calma," + user +", logo, logo, terminamos!",
    "Respire fundo," + user +", estamos na reta final!",
    "Tenha calma," + user +", falta só um pouquinho!",
    "Não se preocupe," + user +", estamos quase lá!",
    "Tranquilo," + user +", o fim está próximo!",
    "Aguente mais um pouco," + user +", está quase lá!",
    "Força," + user +", está quase no final!",
    "Calma," + user +", só mais um pouquinho!"
];

const index = 0;

function respostaBTN(){
    let resposta = respostas[0];
    
    document.getElementById("resposta").innerHTML=resposta;
}