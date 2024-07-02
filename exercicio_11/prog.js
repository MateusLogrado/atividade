let resposta = document.getElementById('resposta')

function calcular(){
    let aresta = Number(document.getElementById("aresta").value)
    let altura = Number(document.getElementById("altura").value)

    let aresta2 = aresta * aresta
    let calculo = aresta2 * altura / 3

    resposta.innerHTML = "A resposta é " + calculo.toFixed(2)
}