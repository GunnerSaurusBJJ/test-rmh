$('.slider-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-bottom'
});
$('.slider-bottom').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-top',
  focusOnSelect: true,
  nextArrow: '<img class="product-slider-arrow arrow-right" src="product-page/arrowproduct.svg">',
  prevArrow: '<img class="product-slider-arrow arrow-left" src="product-page/arrowproduct.svg">',
});
$('.product-reviews__wrapper').slick({
  slidesToShow: 2,
  infinite: false,
  nextArrow: '<img class="product-reviews-slider-arrow right-arrow" src="./icons/topslider/right-arrow.svg">',
  prevArrow: '<img class="product-reviews-slider-arrow left-arrow" src="./icons/topslider/left-arrow.svg">',
});

const showMoreProductDescBtn = document.querySelector('.product-desc__show-more'),
  moreTextProductDesc = document.querySelector('.product-desc__more-text'),
  reviewTexts = document.querySelectorAll('.product-reviews__card-bottom p')

showMoreProductDescBtn.addEventListener('click', () => {
  moreTextProductDesc.classList.toggle('more-text-hidden')
  showMoreProductDescBtn.textContent = moreTextProductDesc.classList.contains('more-text-hidden') ? 'Смотреть все' : 'Скрыть'
})
reviewTexts.forEach(text => {
  if (text.textContent.length > 210) {
    text.nextElementSibling.classList.remove('display-none')
    text.nextElementSibling.addEventListener('click', () => {
      text.classList.toggle('hide-full-review')
      text.nextElementSibling.textContent = text.classList.contains('hide-full-review') ? 'Показать весь текст' : 'Скрыть'
    })
  }
})

const anotherMaterialBtn = document.querySelector('.choose-material'),
  anotherMaterialBackGround = document.querySelector('.choose-sidebar-background')
  anotherMaterialSidebar = document.querySelector('.choose-material-sidebar')

anotherMaterialBtn.addEventListener('click', () => {
  document.documentElement.style.overflow = 'hidden'
  anotherMaterialBackGround.classList.add('choose-sidebar-background-visible')
  anotherMaterialSidebar.classList.add('choose-material-visible')
})

document.querySelector('.choose-material-top__title img').addEventListener('click', () => {
  document.documentElement.style.overflow = 'auto'
  anotherMaterialBackGround.classList.remove('choose-sidebar-background-visible')
  anotherMaterialSidebar.classList.remove('choose-material-visible')
})

document.addEventListener('click', (e) => {
  if (anotherMaterialBackGround.classList.contains('choose-sidebar-background-visible') && e.target === anotherMaterialBackGround) {
    document.documentElement.style.overflow = 'auto'
    anotherMaterialBackGround.classList.remove('choose-sidebar-background-visible')
    anotherMaterialSidebar.classList.remove('choose-material-visible')
  }
})

document.querySelectorAll('.choose-material-main__right-row-main .item img').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.material-selected').classList.remove('material-selected')
    item.classList.add('material-selected')
  })
})

let addToCartBtnProduct = document.querySelector('.product-info__btn')
addToCartBtnProduct.addEventListener('click', () => {
  addToCartBtnProduct.innerHTML = `<img src="icons/addToCartBlack.svg" alt="img"> Перейти в корзину`
  addToCartBtnProduct.style.background = '#fff'
  addToCartBtnProduct.style.color = '#282724'
  addToCartBtnProduct.style.border = '1px solid #ED1C24'
  addToCartBtnProduct.disabled = true
})