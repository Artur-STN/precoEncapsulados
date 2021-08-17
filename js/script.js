var capsula = 0;

var preco_120 = ["12.49", "24.39", "36.09", "59.09", "94.09", "117.49", "175.89", "234.29"]
var preco_60 = ["10.79", "21.19", "31.29", "51.29", "81.69", "101.89", "152.59", "203.29"]
var preco_30 = ["8.49", "16.39", "24.19", "39.99", "63.79", "79.59", "119.09", "158.59"]
var pesos = ["0.35", "0.35", "0.35", "0.35", "0.50", "0.50", "0.50", "0.80"]
var medidasLargura = ["10", "10", "10", "10", "25", "25", "25", "25"]
var medidasComprimento = ["10", "15", "15", "15", "25", "25", "25", "35"]
var medidasAltura = ["15", "20", "20", "20", "35", "35", "35", "35"]

function getValueCapsulas(paramsCapsulas) {

    capsula = paramsCapsulas

    let buttonCapsulas = document.getElementById(`buttonCapsulas_${paramsCapsulas}`)

    buttonCapsulas.style.background = "#e63946"

}

function getValueKits(paramsKits) {

    let ValorPreco = document.getElementById('ValorPreco')
    let ValorPeso = document.getElementById('ValorPeso')
    let MedidaLargura = document.getElementById('MedidaLargura')
    let MedidaComprimento = document.getElementById('MedidaComprimento')
    let MedidaAltura = document.getElementById('MedidaAltura')

    let buttonKit = document.getElementById(`buttonKit_${paramsKits}`)

    buttonKit.style.background = "#e63946"

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

}
