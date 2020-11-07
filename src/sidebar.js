const sidebarItems = document.querySelectorAll('.sidebar-products'),
  openedSideBar = document.querySelector('.sidebar-opened'),
  openedSideBarBackGround = document.querySelector('.sidebar-opened-background'),
  closeSideBarBtn = document.querySelector('.close-sidebar'),
  sofaImage = document.querySelector('.sidebar-item__sofa-image'),
  bedImage = document.querySelector('.sidebar-item__bed-image'),
  armchairImage = document.querySelector('.sidebar-item__armchair-image'),
  chairImage = document.querySelector('.sidebar-item__chair-image'),
  sidebarClock = document.querySelector('.sidebar-opened__clock')

function toggleClassSidebar(e) {
  let title = document.querySelector('.sidebar-opened-title h2')
  openedSideBar.classList.toggle('open-sidebar')
  openedSideBarBackGround.classList.toggle('sidebar-background-visible')
  document.documentElement.style.overflow = openedSideBarBackGround.classList.contains('sidebar-background-visible') ? 'hidden' : 'auto'
  const obj = {
    sofa: 'Диваны',
    bed: 'Кровати',
    armchair: 'Кресла',
    chair: 'Стулья',
  }
  Object.entries(obj).forEach(([key, value]) => {
    if (e.target.parentElement.id === key || e.target.id === key) {
      title.textContent = value
    }
  })
  if (e.target === closeSideBarBtn.querySelector('img')) {
    changeImagePath(sofaImage, './img/sidebar/sofa.svg')
    changeImagePath(bedImage, './img/sidebar/bed.svg')
    changeImagePath(chairImage, './img/sidebar/chair.png')
    changeImagePath(armchairImage, './img/sidebar/armchair.svg')
  }
}

function changeImagePath(element, path) {
  element.src = path
  return
}
const sidebarImages = [sofaImage, bedImage, armchairImage, chairImage]
const sidebarImgPaths = ['./img/sidebar/sofa.svg', './img/sidebar/bed.svg', './img/sidebar/armchair.svg', './img/sidebar/chair.png']
const sidebarImhHoversPaths = ['./img/sidebar/sofa-hover.svg', './img/sidebar/bed-hover.svg', './img/sidebar/armchair-hover.png', './img/sidebar/chair-hover.png']
sidebarItems.forEach((item, idx) => {
  item.addEventListener('click', toggleClassSidebar)
  item.addEventListener('mouseover', () => changeImagePath(sidebarImages[idx], sidebarImhHoversPaths[idx]))
  item.addEventListener('mouseleave', (e) => {
    if (!openedSideBar.classList.contains('open-sidebar')) {
      changeImagePath(sidebarImages[idx], sidebarImgPaths[idx])
    }
  })
})
closeSideBarBtn.addEventListener('click', toggleClassSidebar)

document.addEventListener('click', (e) => {
  if (openedSideBarBackGround.classList.contains('sidebar-background-visible') && e.target === openedSideBarBackGround) {
    document.documentElement.style.overflow = 'auto'
    openedSideBarBackGround.classList.remove('sidebar-background-visible')
    openedSideBar.classList.remove('open-sidebar')
    changeImagePath(sofaImage, './img/sidebar/sofa.svg')
    changeImagePath(bedImage, './img/sidebar/bed.svg')
    changeImagePath(chairImage, './img/sidebar/chair.png')
    changeImagePath(armchairImage, './img/sidebar/armchair.svg')
  }
})

var date = new Date()
let countDownDateForProductOfTheDay = date.setDate(date.getDate() + 1)
setInterval(() => {
  let now = new Date().getTime()
  let distance = countDownDateForProductOfTheDay - now
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  sidebarClock.innerHTML = hours + 'ч | ' + minutes + 'м | ' + seconds + 'с '
}, 1000)

// toggle footer items

document.querySelectorAll('.mobile-footer-links__title').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.nextElementSibling.style.maxHeight) {
      btn.nextElementSibling.style.maxHeight = null
      btn.querySelector('img').style.transform = 'rotate(0)'
    } else {
      btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px'
      btn.querySelector('img').style.transform = 'rotate(180deg)'
    }
  })
})

const mobileNavbarBurger = document.querySelector('.mobile-navbar__burger')
const mobileSidebar = document.querySelector('.mobile-sidebar')
const mobileSubcategory = document.querySelector('.mobile-subcategory')
mobileNavbarBurger.addEventListener('click', () => {
  mobileNavbarBurger.classList.toggle('burger-active')
  document.querySelector('.mobile-sidebar-background').classList.toggle('mobile-sidebar-background--opened')
  mobileSidebar.classList.toggle('mobile-sidebar-opened')
  if (mobileSubcategory.classList.contains('mobile-subcategory-opened')) {
    mobileSubcategory.classList.remove('mobile-subcategory-opened')
    document.documentElement.style.overflow = 'auto'
  }
  if (mobileSidebar.classList.contains('mobile-sidebar-opened')) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = 'auto'
  }
})

let mobileSubcategoryTitle = document.querySelector('.mobile-subcategory-title')

document.querySelectorAll('.mobile-sidebar-categories__item').forEach((item) => {
  item.addEventListener('click', () => {
    mobileSubcategoryTitle.children[1].textContent = item.firstElementChild.children[1].textContent
    mobileSubcategory.classList.add('mobile-subcategory-opened')
    document.documentElement.style.overflow = 'hidden'
  })
})

mobileSubcategoryTitle.querySelector('img').addEventListener('click', () => {
  mobileSubcategory.classList.remove('mobile-subcategory-opened')
})

let scrollToTopBtn = document.querySelector('.footer-subscribe__top-btn')

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

let subscribeInput = document.querySelector('.footer-subscribe__input')

window.addEventListener('scroll', () => {
  let ifInputVisible =
    window.pageYOffset +
      subscribeInput.getBoundingClientRect().top +
      parseFloat(getComputedStyle(scrollToTopBtn).getPropertyValue('bottom')) +
      scrollToTopBtn.clientHeight / 2 +
      subscribeInput.clientHeight <
    window.pageYOffset + document.documentElement.clientHeight

  if (pageYOffset > 200) {
    scrollToTopBtn.classList.remove('hide-btn')
  } else {
    scrollToTopBtn.classList.add('hide-btn')
  }
  if (ifInputVisible) {
    scrollToTopBtn.classList.add('absolute-btn')
    scrollToTopBtn.classList.remove('fixed-btn')
  }
  if (!ifInputVisible) {
    scrollToTopBtn.classList.add('fixed-btn')
    scrollToTopBtn.classList.remove('absolute-btn')
  }
})

document.querySelector('.footer-subscribe__label').addEventListener('click', function () {
  this.previousElementSibling.focus()
})

let mobileSidebarClock = document.querySelector('.mobile-subcategory-product__title span')
function timeMobileSubcategory() {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  const diffMs = tomorrow - today
  const seconds = addZero(Math.floor(diffMs / 1000) % 60)
  const hours = addZero(Math.floor(diffMs / 1000 / 3600) % 24)
  const mins = addZero(Math.floor(diffMs / 1000 / 60) % 60)
  mobileSidebarClock.textContent = `${hours}ч | ${mins}м | ${seconds}с`
}
function addZero(num) {
  return num < 10 ? `0${num}` : num
}

setInterval(() => {
  timeMobileSubcategory()
}, 1000)
