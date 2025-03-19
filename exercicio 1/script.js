function verificar() {
  var nome = document.getElementById("innome");
  var idade = document.getElementById("inidade");
  var p = document.getElementById("outmsg");

  if (idade.value === "" || nome.value === "") {
    alert("Insira sua idade e nome");
    nome.focus();
    return;
  }

  if (idade.value < 18) {
    p.innerHTML =
      nome.value +
      ", você tem " +
      idade.value +
      " anos por isso você é menor de idade";
    p.style.color = "rgb(255, 61, 61)";
    return;
  }
  p.innerHTML =
    nome.value +
    ", você tem " +
    idade.value +
    " anos por isso você é maior de idade";

  p.style.color ="rgb(109, 248, 128)";
}
