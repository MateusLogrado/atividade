let resposta = document.getElementById("resposta")

function calcular(){
    let produto = Number(document.getElementById("produto").value)

    if(produto < 50){
        let cin = produto * (35/100)
        let cinfim = cin + produto

        resposta.innerHTML = "O seu valor de venda é R$" + cinfim.toFixed(2) 
    }else if(produto > 50 || produto < 100){
        let cem = produto * (25/100)
        let cemfim = cem + produto

        resposta.innerHTML = "O seu valor de venda é R$" + cemfim.toFixed(2) 
    }else{
        let quin = produto * (15/100)
        let quinfim = quin + produto

        resposta.innerHTML = "O seu valor de venda é R$" + quinfim.toFixed(2) 
    }
}