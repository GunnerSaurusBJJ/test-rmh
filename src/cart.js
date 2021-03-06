document.querySelectorAll('.cart-delivery__type').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.cart-delivery__type-selected').classList.remove('cart-delivery__type-selected')
    item.classList.add('cart-delivery__type-selected')
    if (item.id === 'delivery-pickup') {
      document.querySelector('.cart-address-section .address-info').classList.remove('display-none')
      document.querySelector('.cart-data__inputs-top').classList.add('display-none')
    } else {
      document.querySelector('.cart-address-section .address-info').classList.add('display-none')
      document.querySelector('.cart-data__inputs-top').classList.remove('display-none')
    }
  })
})

document.querySelectorAll('.cart-payment__type').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.cart-payment__type-selected').classList.remove('cart-payment__type-selected')
    item.classList.add('cart-payment__type-selected')
  })
})

// sticky summary

let cartSummary = document.querySelector('.cart-summary')
let stickySummary = cartSummary.offsetTop - 40
if (window.innerWidth > 576) {
  window.onscroll = function () {
    if (window.pageYOffset > stickySummary) {
      cartSummary.classList.add('cart-summury-sticky')
    } else {
      cartSummary.classList.remove('cart-summury-sticky')
    }
  }
}

document.querySelectorAll('.cart-data__item .label-focus').forEach((i) => {
  i.addEventListener('click', function () {
    this.previousElementSibling.focus()
  })
})

let inputTel = document.querySelector('.cart-data__inputs-wrapper input[type="tel"]')
let im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputTel)
