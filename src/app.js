$(document).ready(function () {
  $('.slider-wrapper').slick({
    nextArrow: '<img class="top-slider__right-arrow top-slider-arrow" src="./icons/topslider/right-arrow.svg">',
    prevArrow: '<img class="top-slider__left-arrow top-slider-arrow" src="./icons/topslider/left-arrow.svg">',
  })
  $('.blog-wrapper').slick({
    slidesToShow: 2,
    arrows: false,
    centerPadding: '10px',
    centerMode: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
        settings: 'unslick',
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: 'unslick',
      },
    ],
  })
})
var date = new Date()
let countDownDiscountModal = date.setDate(date.getDate() + 3)

const modalDiscountClock = document.querySelector('.modal-discount__clock'),
  modalDiscountBg = document.querySelector('.modal-background'),
  modalCloseBtn = document.querySelector('.modal-close'),
  cardSizeBtnWrapper = document.querySelectorAll('.card-sizes__btns'),
  cardColorBtnWrapper = document.querySelectorAll('.card-colors__btns')

function addTimerModal() {
  let now = new Date().getTime()
  let distance = countDownDiscountModal - now
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  modalDiscountClock.innerHTML = days + 'д | ' + hours + 'ч | ' + minutes + 'м '
}

setInterval(() => {
  addTimerModal()
}, 1000)

setTimeout(() => {
  modalDiscountBg.classList.add('show-modal')
}, 5000)

modalDiscountBg.addEventListener('click', () => {
  modalDiscountBg.classList.remove('show-modal')
})

//toggle class to sizes and colors

cardSizeBtnWrapper.forEach((item, idx) => toggleUniqueClass(item, idx, 'sizebtn', 'card-size__button-selected'))
cardColorBtnWrapper.forEach((item, idx) => toggleUniqueClass(item, idx, 'colorbtn', 'card-colors__selected'))

function toggleUniqueClass(item, idx, addedClass, mainClass) {
  return Array.from(item.children).forEach((btn) => {
    btn.classList.add(`${addedClass}${idx}`)
    btn.addEventListener('click', () => {
      document.querySelector(`.${mainClass}.${addedClass}${idx}`).classList.remove(`${mainClass}`)
      btn.classList.add(`${mainClass}`)
    })
  })
}
// add no-mobile class to size btns from 3 element
cardSizeBtnWrapper.forEach((item) => {
  Array.from(item.children).forEach((btn, idx) => {
    if (idx > 1) {
      btn.classList.add('no-mobile')
    }
  })
})

function magnify(imgID, zoom) {
  var img, glass, w, h, bw
  img = document.getElementById(imgID)
  glass = document.createElement('DIV')
  glass.setAttribute('class', 'img-magnifier-glass')
  img.parentElement.insertBefore(glass, img)
  glass.style.backgroundImage = "url('" + img.src + "')"
  glass.style.backgroundRepeat = 'no-repeat'
  glass.style.backgroundSize = img.width * zoom + 'px ' + img.height * zoom + 'px'
  bw = 3
  w = glass.offsetWidth / 2
  h = glass.offsetHeight / 2
  glass.addEventListener('mousemove', moveMagnifier)
  img.addEventListener('mousemove', moveMagnifier)
  glass.addEventListener('touchmove', moveMagnifier)
  img.addEventListener('touchmove', moveMagnifier)
  function moveMagnifier(e) {
    var pos, x, y
    e.preventDefault()
    pos = getCursorPos(e)
    x = pos.x
    y = pos.y
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom
    }
    if (x < w / zoom) {
      x = w / zoom
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom
    }
    if (y < h / zoom) {
      y = h / zoom
    }
    glass.style.left = x - w + 'px'
    glass.style.top = y - h + 'px'
    glass.style.backgroundPosition = '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px'
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0
    e = e || window.event
    a = img.getBoundingClientRect()
    x = e.pageX - a.left
    y = e.pageY - a.top
    x = x - window.pageXOffset
    y = y - window.pageYOffset
    return { x: x, y: y }
  }
}
magnify('myimage', 1.5)

const collectionsPoints = document.querySelectorAll('.collection-point')
collectionsPoints.forEach((point, index) => {
  point.setAttribute('id', index)
  point.nextElementSibling.setAttribute('id', index)
  point.addEventListener('click', (e) => {
    document.querySelectorAll('.collection-card-opened').forEach((item) => {
      if (item.id !== point.id) {
        item.classList.remove('collection-anim')
      }
    })
    // if (window.innerWidth > 580) {
    //   point.nextElementSibling.style.right = parseFloat(getComputedStyle(point).getPropertyValue('right')) - 230 + 'px'
    // }
    // if (window.innerWidth < 580) {
    // point.nextElementSibling.style.right = parseFloat(getComputedStyle(point).getPropertyValue('right')) - point.nextElementSibling.offsetWidth + point.offsetWidth * 2 + 'px'
    // point.nextElementSibling.style.top = parseFloat(getComputedStyle(point).getPropertyValue('top')) - point.nextElementSibling.offsetHeight / 2 - 10 + 'px'
    // }
    collectionsPoints.forEach((item) => {
      if (item.id !== point.id) {
        item.classList.remove('collection-point-active')
      }
    })
    point.nextElementSibling.classList.toggle('collection-anim')
    point.classList.toggle('collection-point-active')
  })
})

document.querySelector('.scroll-up-main').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// change img on mouseover

document.querySelectorAll('.card-hover-img').forEach((card) => {
  let srcDefault = card.querySelector('a img').src
  let whiteLine = card.querySelector('.white-hover-slide-line')
  let hoverSlideImgs = card.querySelectorAll('.hover-slide-img')
  if (!Array.from(hoverSlideImgs).length) {
    whiteLine.style.display = 'none'
    card.querySelector('.hover-slide-line').style.display = 'none'
  }
  whiteLine.style.width = 100 / Array.from(hoverSlideImgs).length + '%'
  hoverSlideImgs.forEach((item, idx) => {
    item.addEventListener('mouseover', () => {
      card.querySelector('a img').src = item.dataset.src
      whiteLine.style.left = parseFloat(whiteLine.style.width) * idx + '%'
    })
    item.addEventListener('mouseleave', () => {
      card.querySelector('a img').src = srcDefault
      whiteLine.style.left = 0
    })
  })
})

// active favorite icon
document.querySelectorAll('.card').forEach((card) => {
  card.querySelectorAll('.love.action').forEach((item) => {
    item.addEventListener('click', () => addToFavIconActive(card, '.favorite-icon-product', '.line'))
  })
  if (window.innerWidth < 800) {
    card
      .querySelectorAll('.favorite-mobile.no-desktop')
      .forEach((item) => item.addEventListener('click', () => addToFavIconActive(card, '.favorite-mobile.no-desktop .favorite-icon-product', '.favorite-mobile.no-desktop .line')))
  }
})

function addToFavIconActive(card, iconClass, lineClass) {
  card.querySelector(iconClass).classList.toggle('love')
  card.querySelectorAll(lineClass).forEach((i) => i.classList.add('active'))
  card.querySelector(iconClass).classList.add('active')
  setTimeout(() => {
    card.querySelectorAll(lineClass).forEach((i) => i.classList.remove('active'))
    card.querySelector(iconClass).classList.remove('active')
  }, 300)
}
