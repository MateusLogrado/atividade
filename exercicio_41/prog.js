let resposta = document.getElementById('resposta')

function calcular(){

    let peso = 1.27 + 0.873 + 0.792 + 0.672 + 0.714 + 0.623
    let pesodin = peso * 14.95
    let mindin = pesodin * 7
    let maxdin = mindin * 4 * 3
    let dindia = maxdin * 22
    let pesodia = peso * 7 * 4 * 3 * 22

    resposta.innerHTML = "o dinheiro obetido nesses dias é R$" + dindia.toFixed(2) + "<br>"
    resposta.innerHTML +=  "o peso metido nesses dias é " + pesodia.toFixed(2) + " KG"
}