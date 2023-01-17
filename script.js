const modalW = document.querySelector('.modal-menu')
const burgerOpen = document.querySelector('.burger-menu')
const burgerClose = document.querySelector('.modal-burger-menu')
const header = document.querySelector('.header')
const item = document.querySelectorAll('.item')
const activeTab = document.querySelectorAll('.tab')


  for (let el of activeTab) {
    el.addEventListener('click', () => {
      for (let el of activeTab) {
        el.classList.remove('active') 
      }
      el.classList.add('active')
      for (let i=0; i<activeTab.length; i++) {
      item[i].classList.remove('item-active')

        if (activeTab[i].classList.contains('active')) {
          item[i].classList.add('item-active')
        }
       }
    })
  }
  for (let i=0; i<activeTab.length; i++) {
    if (activeTab[i].classList.contains('active')) {
      item[i].classList.add('item-active')
    }
   }
  


burgerOpen.addEventListener("click", () => {
  modalW.classList.toggle('hide')
  modalW.classList.toggle('open')

})

burgerClose.addEventListener("click", () => {
  modalW.classList.toggle('hide')
  modalW.classList.toggle('open')

})
