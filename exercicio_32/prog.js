let resposta = document.getElementById("resposta")

function calcular(){
    let tomate = Number(document.getElementById("tomate").value)
    let cebola = Number(document.getElementById("cebola").value)
    let aipim = Number(document.getElementById("aipim").value)
    let batata = Number(document.getElementById("batata").value)
    let cenoura = Number(document.getElementById("cenoura").value)
    let chuchu = Number(document.getElementById("chuchu").value)

    let quato = tomate * 5.35
    let quace = cebola * 3.32
    let quaai = aipim * 2.87
    let quaba = batata * 4.43
    let quaceno = cenoura * 3.59
    let quachu = chuchu * 1.79

    let total = quato + quace + quaai + quaba + quaceno + quachu

    resposta.innerHTML = "o total que precisa pagar é R$" + total.toFixed(2) 
}