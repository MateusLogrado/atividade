let resposta = document.getElementById("resposta")

function calcular(){
    let um = Number(document.getElementById("um").value)
    let dois = Number(document.getElementById("dois").value)
    let tres = Number(document.getElementById("tres").value)

    if((um > dois) && (um > tres)){
        resposta.innerHTML = "o maior é " + um + "<br>"
    }else if((dois > um) && (dois > tres)){
        resposta.innerHTML = "o maior é " + dois + "<br>"
    }else{
        resposta.innerHTML = "o maior é " + tres + "<br>"
    }

    if((um < dois) && (um < tres)){
        resposta.innerHTML += "o menor é " + um
    }else if((dois < um) && (dois < tres)){
        resposta.innerHTML += "o menor é " + dois
    }else{
        resposta.innerHTML += "o menor é " + tres
    }
}