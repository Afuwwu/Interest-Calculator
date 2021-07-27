let Pslider = document.querySelector('.Pslider')
let Pvalue = document.querySelector('.Pvalue')

let Nslider = document.querySelector('.Nslider')
let Nvalue = document.querySelector('.Nvalue')

let Rslider = document.querySelector('.Rslider')
let Rvalue = document.querySelector('.Rvalue')

let Ivalue = document.querySelector('.Ivalue')
let PIvalue = document.querySelector('.PIvalue')
let EMIvalue = document.querySelector('.EMIvalue')


Pslider.addEventListener('input', () => {
    Pvalue.innerHTML = "$" + Pslider.value
    calculate()
})
Nslider.addEventListener('input', () => {
    Nvalue.innerHTML = Nslider.value + " " + "year"
    calculate()
})
Rslider.addEventListener('input', () => {
    Rvalue.innerHTML = Rslider.value + " %"
    calculate()
})

function calculate() {
    let simpleInterest = Pslider.value * Nslider.value * Rslider.value / 100
    Ivalue.innerHTML = "$" + simpleInterest

    let totalAmount = parseFloat(Pslider.value) + parseFloat(simpleInterest)
    PIvalue.innerHTML = "$" + Math.round(totalAmount)

    let months = parseInt(Nslider.value) * 12
    let EMI = parseInt(totalAmount / months)
    EMIvalue.innerHTML = "$" + EMI
}