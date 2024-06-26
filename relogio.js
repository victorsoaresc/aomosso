setInterval(() => {
  var hora = new Date();

  var h = hora.getHours();
  var m = hora.getMinutes();
  var s = hora.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("hora").innerHTML = h + ":" + m + ":" + s;

  if (h === 12) {
    document.getElementById("username").innerHTML = "Gera, " + user + ", já são:";
    document.getElementById("emoji").innerHTML = "&#x1F60B";
    document.getElementById("botao_teimoso").style.opacity = "0";
    document.getElementById("botao_teimoso").disabled = true;
} else {
    document.getElementById("username").innerHTML = "Não, " + user + ", ainda são";
    document.getElementById("emoji").innerHTML = "&#x270B";
};
  
}, 100);