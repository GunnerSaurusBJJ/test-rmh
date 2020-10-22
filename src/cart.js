document.querySelectorAll('.cart-delivery__type').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.cart-delivery__type-selected').classList.remove('cart-delivery__type-selected')
    item.classList.add('cart-delivery__type-selected')
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
