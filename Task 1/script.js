/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formElm = document.querySelector('form')
const inputElm = document.getElementById('search')
const submitBtn = document.getElementById('submit-btn')
const outputElm = document.getElementById('modal-body')
const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

formElm.addEventListener('submit', (event) => {
   event.preventDefault();
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

submitBtn.addEventListener('click', () => {
   const convertToLb = (inputElm.value * 2.2046).toFixed(2);
   const convertToG = (inputElm.value / 0.0010000).toFixed(2);
   const convertToOz = (inputElm.value * 35.274).toFixed(2);
   return outputElm.innerHTML = `
    <div class="modal-text">${inputElm.value} Kg is ${convertToLb} Lbs</div>
    <div class="modal-text">${inputElm.value} Kg is ${convertToG} g</div>
    <div class="modal-text">${inputElm.value} Kg is ${convertToOz} oz</div>`,
      inputElm.value = "";
})


openModalButton.forEach(button => {
   button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
   })
})


closeModalButton.forEach(button => {
   button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
   })
})

function openModal(modal) {
   if (modal == null) return
   modal.classList.add('active')
   overlay.classList.add('active')
}

function closeModal(modal) {
   if (modal == null) return
   modal.classList.remove('active')
   overlay.classList.remove('active')
}