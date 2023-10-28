
const milissegundos = document.querySelector('.milissegundos')
const segundos = document.querySelector('.segundos')
const minutos = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO = 0

function milissegundos() {
    miliNum++
    if (miliNum < 10) {
        milissegundos.innerHTML = '0' + miliNum
    } else {
        milissegundos.innerHTML = miliNum
    }

    if (miliNum == 99) {
        miliNum = 0
        segundos()
    }
}

function segundos() {
    segNum++
    if (segNum < 10) {
        segundos.innerHTML = '0' + segNum
    }else {
        segundos.innerHTML = segNum
    }

    if (segNum == 59){
        segNum = 0
        minutos()
    }
}

function minutos() {
    minNum++
    if (minNum < 10) {
        minutos.innerHTML = '0' + minNum
    } else {
        minutos.innerHTML = minNum
    }
}

function iniciar() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
        milissegundos()
    }, 10)
}

function finalizar() {
    clearInterval(INTERVALO)
}

function resetar() {
    clearInterval(INTERVALO)
    miliNum = 0
    segNum = 0
    minNum = 0
    milissegundos.innerHTML = '00'
    segundos.innerHTML = '00'
    minutos.innerHTML = '00'
}