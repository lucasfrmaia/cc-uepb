let nome = prompt("Qual seu nome?");
let idade = 20;

function saudacao(pessoa) {
  if (pessoa != "") {
    console.log("Olá, " + pessoa + "!");
  } else {
    console.log("Olá, visitante!");
  }
}

saudacao(nome);

while (idade < 25) {
  idade++;
  console.log("Idade agora: " + idade);
}
