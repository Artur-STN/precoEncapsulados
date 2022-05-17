var capsula = 0;

var preco_120 = ["17,99", "35,49", "52,59", "86,99", "138,70", "171,99", "255,69", "338,07"]
var preco_60 = ["13,19", "25,99", "38,39", "63,39", "101,09", "125,29", "186,09", "246,09"]
var preco_30 = ["11,59", "22,79", "33,69", "55,59", "88,49", "109,69", "162,99", "215,39"]

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
