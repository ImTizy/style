//declaração de variáveis
let quantidade = 0;
let total = 0;

//função utilizada para calcular a quantidade...
function Calculabruno(){

//prompt para entrada de dados
quantidade = parseInt(prompt("Digite a quantidade de vezes que foi preciso mandar ele calar a boca:"));

//faz a soma e adicionar na variável total 
total = total + quantidade;

//mostra o resultado usando alert
//alert(total);

//mostra o resultado usando innerHTML
let dados = window.document.getElementById('contador');

dados.innerHTML = "Quantidade: " +total + ".";

if(total == 10){
    dados.innerHTML = "Quantidade: " + total + " juliets de cria."
}


}