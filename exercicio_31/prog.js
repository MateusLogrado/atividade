let resposta = document.getElementById('resposta')

function calcular(){

    let calculo1 = 2.5 * 2.5
    let volume = 22 * 3.14 * calculo1
    let calculo2 = volume * 16 * 30

    resposta.innerHTML = "A quantidade de volume é " + calculo2 + " cm"
}