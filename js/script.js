var capsula = 0;

var preco_120 = ["14,99", "29,69", "43,69", "71,79", "113,29", "140,29", "208,29", "277,29"]
var preco_60 = ["11,29", "21,69", "31,79", "51,79", "82,19", "102,39", "153,09", "203,79"]
var preco_30 = ["8,99", "16,89", "24,69", "40,49", "64,29", "80,09", "119,59", "159,09"]

var pesos = ["0,35", "0,35", "0,35", "0,35", "0,50", "0,50", "0,50", "0,80"]

var medidasLargura = ["10", "10", "10", "10", "25", "25", "25", "25"]
var medidasComprimento = ["10", "15", "15", "15", "25", "25", "25", "35"]
var medidasAltura = ["15", "20", "20", "20", "35", "35", "35", "35"]

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
