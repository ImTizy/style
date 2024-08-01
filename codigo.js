//declaracao de variaveis
let nascimento
let anoAtual
let resultado
let idadeCachorro
let nome
let qualCalculo

nome = prompt("Qual o seu nome?");
nascimento = parseInt(prompt("Qual a data de nascimento?"));
anoAtual = parseInt(prompt("Qual o ano atual?"));


//primeiro desafio (idade humana)
resultado = anoAtual - nascimento;

//segundo desafio
idadeCachorro = resultado * 7;

//terceiro desafio (mostrar o nome)

//quarto desafio (perguntar qual calculo o usuario quer)
qualCalculo = parseInt(prompt("Digite 1 para idade humana e digite 2 para idade canina"));
//mostrar o resultado
if(qualCalculo ==1){
    alert(nome + ", A idade é:  " + resultado);
}
else if(qualCalculo == 2){
    alert(nome + ", A idade em anos caninos é:  " + resultado); 
} else{
    alert(nome + "Por favor digite um número valído");
}
