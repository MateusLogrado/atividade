let resposta = document.getElementById("resposta")

function calcular(){
    let carro = Number(document.getElementById("carro").value)
    let perc = Number(document.getElementById("perc").value)

    let percpor = carro * (perc/100)
    let impodpor = carro * (15/100)

    let final = carro + percpor + impodpor

    resposta.innerHTML = "o preço final é R$ " + final.toFixed(2)
}