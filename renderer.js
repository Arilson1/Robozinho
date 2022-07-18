const { shell } = require("electron");
const os = require("os");

const message = document.getElementById("message");
const grato = document.getElementById("grato");
const app = document.getElementById("app");

grato.style.display = "none";

function dataAtualFormatada() {
  const data = new Date(),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
    ano = data.getFullYear();
  return ano + dia + mes;
}

function horaAtual() {
  const horario = new Date(),
    hora = horario.getHours(),
    minutos = horario.getMinutes(),
    segundos = horario.getSeconds();
  return hora + "" + minutos + "" + segundos;
  /*  const date = new Date().toLocaleString();
  return date; */
}

function criarTicket() {
  return dataAtualFormatada() + horaAtual();
}

content = {
  ticket: criarTicket(),
  mensagem: "",
  usuário: os.userInfo().username,
  nomenclatura: os.hostname(),
  //data: dataAtualFormatada(),
  //hora: horaAtual(),
};

document.getElementById("openTicket").addEventListener("click", (event) => {
  content.mensagem = message.value;
  console.log(content);
  app.style.display = "none";
  grato.style.display = "flex";
});
