var capsula = 0;

var preco_120 = ["19,39", "37,09", "54,59", "89,49", "141,39", "175,19", "258,19", "338,69"]
var preco_60 = ["14,49", "27,29", "39,99", "65,39", "103,19", "127,69", "188,09", "246,69"]
var preco_30 = ["12,79", "23,99", "35,19", "57,39", "90,39", "111,89", "164,79", "215,99"]

var pesos = ["0.35", "0.35", "0.60", "0.60", "0.60", "0.80", "1.20", "1.60"]

var medidasLargura = ["10", "10", "10", "8", "25", "25", "25", "25"]
var medidasComprimento = ["10", "15", "15", "25", "25", "25", "25", "35"]
var medidasAltura = ["15", "20", "20", "27", "35", "35", "35", "35"]

function getValueCapsulas(paramsCapsulas) {

    capsula = paramsCapsulas

    let buttonCapsulas = document.getElementById(`buttonCapsulas_${paramsCapsulas}`)

    buttonCapsulas.style.background = "#e63946"
    buttonCapsulas.style.color = "white"

}

function getValueKits(paramsKits) {

    let ValorPreco = document.getElementById('ValorPreco')
    let ValorPeso = document.getElementById('ValorPeso')
    let MedidaLargura = document.getElementById('MedidaLargura')
    let MedidaComprimento = document.getElementById('MedidaComprimento')
    let MedidaAltura = document.getElementById('MedidaAltura')

    let buttonKit = document.getElementById(`buttonKit_${paramsKits}`)

    

    if (capsula == 0) {

        alert('SELECIONE A QUANTIDADE DE CAPSULAS')

    } else {

        if (capsula == 120) {

            ValorPreco.innerHTML = `R$ ${preco_120[paramsKits]}`
            
        } else if (capsula == 60) {

            ValorPreco.innerHTML = `R$ ${preco_60[paramsKits]}`
            
        } else if (capsula == 30) {

            ValorPreco.innerHTML = `R$ ${preco_30[paramsKits]}`
            
        }

        ValorPeso.innerHTML = `Kg ${pesos[paramsKits]}`
        MedidaLargura.innerHTML = medidasLargura[paramsKits]
        MedidaComprimento.innerHTML = medidasComprimento[paramsKits]
        MedidaAltura.innerHTML = medidasAltura[paramsKits]

    }
    
    buttonKit.style.background = "#e63946"
    buttonKit.style.color = "white"

}
