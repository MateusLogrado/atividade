let resposta = document.getElementById('resposta')

function calcular(){
    let comp = Number(document.getElementById("comp").value)
    let baseal = Number(document.getElementById("baseal").value)
    let altura = Number(document.getElementById("altura").value)

    let calculo1 = comp * baseal / 2
    let calculo2 = calculo1 * altura / 3

    resposta.innerHTML = "A resposta é " + calculo2.toFixed(2)
}