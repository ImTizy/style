let nota1
let nota2
let nota3

nota1 = parseInt(prompt("Qual a noita do 1 trimestre?"))
nota1 = parseInt(prompt("Qual a noita do 2 trimestre?"))

resultado = 180 - (nota1+nota2);

if(resultado> 0){
    alert("Precisa de" + resultado + "para passar");
} else {
    alert("Parabéns! Você já está aprovado")
}