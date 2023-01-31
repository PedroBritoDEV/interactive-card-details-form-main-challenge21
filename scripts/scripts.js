const cardHolder = document.querySelector('.cardholder-name')
const cardHolderInput = document.querySelector('.cardholder-input')

const cardNumber = document.querySelector('.card-number')
const cardNumberInput = document.querySelector('.cardnumber-input')

const cardMonth = document.querySelector('.month-iformation')
const cardMounthInput = document.querySelector('.month-input')

const cardYear = document.querySelector('.year-information')
const cardYearInput = document.querySelector('.year-input')

const cardCvc = document.querySelector('.card-cvc')
const cardCvcInput = document.querySelector('.cvc-input')


var errorMsm = document.querySelectorAll('.error-msg')
var form = document.querySelector('.card-inputs')
var inputSection = document.querySelector('.card-inputs')
var thank = document.querySelector('.thank-section')

function typing(n) {
  switch(n) {
    case 0:
      const cardHolderValue = cardHolderInput.value

      cardHolder.innerHTML = cardHolderValue.toUpperCase()

        if (cardHolderInput.value.length < 1) {
          cardHolder.innerHTML = 'JANE APPLESED'
        }else {
          removeError(0)
        }
      break
    case 1:
      const cardNumberValue = cardNumberInput.value
      const newCardNumberValue = cardNumberValue.slice(0,4)+' '+cardNumberValue.slice(4,8)+' '+cardNumberValue.slice(8,12)+' '+cardNumberValue.slice(12,16)

      cardNumber.innerHTML = newCardNumberValue

        if (cardNumberValue.length < 1) {
          cardNumber.innerHTML = '0000 0000 0000 0000'
        }else {
          removeError(1) 

        }
      break 
    case 2:
      const cardMounthValue = cardMounthInput.value
      cardMonth.innerHTML = cardMounthValue.slice(0,2)
      if (cardMounthValue.length < 1) {
        cardMonth.innerHTML = '00'

      }else{
        removeError(2)
      }
      break
    case 3:
      const cardYearValue = cardYearInput.value
      cardYear.innerHTML = cardYearValue.slice(0,2)
      if (cardYearValue.length < 1) {
        cardYear.innerHTML = '00'
      }else{
        removeError(3)
      }
      break
    case 4:
      const cvcValue = cardCvcInput.value
      cardCvc.innerHTML = cvcValue.slice(0,3)
      if (cvcValue.length < 1) {
        cardCvc.innerHTML = '000'
      }else {
        removeError(4)
      }
      break
  }
}
var vality = true
function putError(n) {
  switch(n) {
    case 0:
      if (cardHolderInput.value.length < 1) {
        cardHolderInput.style.border = '1px solid hsl(0, 100%, 66%)'
        errorMsm[0].style.display = 'block'
      
      }else {
        removeError(0)
      }
      break
    case 1:
      if (cardNumberInput.value.length < 8) {
        cardNumberInput.style.border = '1px solid hsl(0, 100%, 66%)'
        errorMsm[1].style.display = 'block'
      }else {
        removeError(1)
      }
      break
    case 2:
      if (cardMounthInput.value.length < 1  || cardMounthInput.value > 32) {
        cardMounthInput.style.border = '1px solid hsl(0, 100%, 66%)'
        errorMsm[2].style.display = 'block'
      }else {
        removeError(2)
      }
      break
    case 3:
      if (cardYearInput.value.length < 1) {
        cardYearInput.style.border = '1px solid hsl(0, 100%, 66%)'
        errorMsm[2].style.display = 'block'
      }else{ 
        removeError(3)
      }
      break
    case 4:
      if (cardCvcInput.value.length < 1) {
        cardCvcInput.style.border = '1px solid hsl(0, 100%, 66%)'
        errorMsm[3].style.display = 'block'
      }else {
        removeError(4)
      }
      break
  }
}
function removeError(n) {
  switch(n) {
    case 0:
      errorMsm[0].style.display = 'none'
      cardHolderInput.style.border = '1px solid hsl(279, 6%, 55%)'
      break
    case 1:
      errorMsm[1].style.display = 'none'
      cardNumberInput.style.border = '1px solid hsl(279, 6%, 55%)'
      break
    case 2:
      errorMsm[2].style.display = 'none'
      cardMounthInput.style.border = '1px solid hsl(279, 6%, 55%)'
      break
    case 3:
      errorMsm[2].style.display = 'none'
      cardYearInput.style.border = '1px solid hsl(279, 6%, 55%)'
      break
    case 4:
      errorMsm[3].style.display = 'none'
      cardCvcInput.style.border = '1px solid hsl(279, 6%, 55%)'
      break
  }
}

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  
  if(
    cardHolderInput.value.length < 1||
    cardNumberInput.value.length < 8||
    cardMounthInput.value.length < 1  || cardMounthInput.value > 32||
    cardYearInput.value.length < 1||
    cardCvcInput.value.length < 1
  ){
    putError(0)
    putError(1)
    putError(3)
    putError(2)
    putError(4)
  }else {
    inputSection.classList.add('hidden')
    thank.classList.remove('hidden')
  }
})

