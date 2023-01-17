const modalW = document.querySelector('.modal-menu')
const burgerOpen = document.querySelector('.burger-menu')
const burgerClose = document.querySelector('.modal-burger-menu')
const header = document.querySelector('.header')


console.log(burgerOpen);
console.log(burgerClose);

burgerOpen.addEventListener("click", () => {
  console.log('click burger');
  modalW.classList.toggle('hide')
  modalW.classList.toggle('open')

})

burgerClose.addEventListener("click", () => {
  modalW.classList.toggle('hide')
  modalW.classList.toggle('open')

})
