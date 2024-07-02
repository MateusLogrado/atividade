let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")

function calcular(){
    let fahrenheit = Number(document.getElementById("fahrenheit").value)
    let celsius = Number(document.getElementById("celsius").value)
    
    console.log(fahrenheit)
    console.log(celsius)

    let calculo1 = ( fahrenheit - 32 ) * 5/9
    let calculo2 = ( celsius *  9/5 ) + 32

    resposta1.innerHTML = "a conversão fica = " + calculo1.toFixed(2) + " celsius"
    resposta2.innerHTML = "a conversão fica = " + calculo2 + " fahreheit"
}