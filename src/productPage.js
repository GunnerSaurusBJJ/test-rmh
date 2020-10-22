$('.slider-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true,
      },
    },
  ],
  asNavFor: '.slider-bottom',
})
$('.slider-bottom').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.slider-top',
  focusOnSelect: true,
  mobileFirst: true,
  nextArrow: '<img class="product-slider-arrow arrow-right" src="product-page/arrowproduct.svg">',
  prevArrow: '<img class="product-slider-arrow arrow-left" src="product-page/arrowproduct.svg">',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
})
$('.product-reviews__wrapper').slick({
  slidesToShow: 2,
  infinite: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 0.8,
      },
    },
  ],
  nextArrow: '<img class="product-reviews-slider-arrow right-arrow" src="./icons/topslider/right-arrow.svg">',
  prevArrow: '<img class="product-reviews-slider-arrow left-arrow" src="./icons/topslider/left-arrow.svg">',
})
$('.product-info__choise-color').slick({
  slidesToShow: 3,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 900,
      settings: 'unslick',
    },
  ],
  arrows: false,
})
$('.product-features__wrapper').slick({
  mobileFirst: true,
  infinite: false,
  slidesToShow: 1.2,
  responsive: [
    {
      breakpoint: 576,
      settings: 'unslick',
    },
  ],
  arrows: false,
})
const showMoreProductDescBtn = document.querySelector('.product-desc__show-more'),
  moreTextProductDesc = document.querySelector('.product-desc__more-text'),
  reviewTexts = document.querySelectorAll('.product-reviews__card-bottom p')

showMoreProductDescBtn.addEventListener('click', () => {
  moreTextProductDesc.classList.toggle('more-text-hidden')
  showMoreProductDescBtn.textContent = moreTextProductDesc.classList.contains('more-text-hidden') ? 'Смотреть все' : 'Скрыть'
})
reviewTexts.forEach((text) => {
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

document.querySelectorAll('.select-img').forEach((item) => {
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

// back in history btn

document.querySelector('.back-to-catalog').addEventListener('click', () => {
  window.history.back()
})

document.querySelectorAll('.product-info__choise-color img').forEach((img) => {
  img.addEventListener('click', () => {
    document.querySelector('.product-info__choise-color img.selected').classList.remove('selected')
    img.classList.add('selected')
  })
})
