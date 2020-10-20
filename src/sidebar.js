const sidebarItems = document.querySelectorAll('.sidebar-products'),
  openedSideBar = document.querySelector('.sidebar-opened'),
  openedSideBarBackGround = document.querySelector('.sidebar-opened-background'),
  closeSideBarBtn = document.querySelector('.close-sidebar'),
  sofaImage = document.querySelector('.sidebar-item__sofa-image'),
  bedImage = document.querySelector('.sidebar-item__bed-image'),
  armchairImage = document.querySelector('.sidebar-item__armchair-image'),
  chairImage = document.querySelector('.sidebar-item__chair-image'),
  sidebarClock = document.querySelector('.sidebar-opened__clock')

var date = new Date()
let countDownDateForProductOfTheDay = date.setDate(date.getDate() + 1)

sidebarItems.forEach((item) => {
  item.addEventListener('click', toggleClassSidebar)
})

closeSideBarBtn.addEventListener('click', toggleClassSidebar)

sidebarItems[0].addEventListener('mouseover', () => changeImagePath(sofaImage, './img/sidebar/sofa-hover.svg'))
sidebarItems[0].addEventListener('mouseleave', (e) => {
  if (!openedSideBar.classList.contains('open-sidebar')) {
    changeImagePath(sofaImage, './img/sidebar/sofa.svg')
  }
})

sidebarItems[1].addEventListener('mouseover', () => changeImagePath(bedImage, './img/sidebar/bed-hover.svg'))
sidebarItems[1].addEventListener('mouseleave', () => {
  if (!openedSideBar.classList.contains('open-sidebar')) {
    changeImagePath(bedImage, './img/sidebar/bed.svg')
  }
})

sidebarItems[2].addEventListener('mouseover', () => changeImagePath(armchairImage, './img/sidebar/armchair-hover.png'))
sidebarItems[2].addEventListener('mouseleave', () => {
  if (!openedSideBar.classList.contains('open-sidebar')) {
    changeImagePath(armchairImage, './img/sidebar/armchair.svg')
  }
})

sidebarItems[3].addEventListener('mouseover', () => changeImagePath(chairImage, './img/sidebar/chair-hover.png'))
sidebarItems[3].addEventListener('mouseleave', () => {
  if (!openedSideBar.classList.contains('open-sidebar')) {
    changeImagePath(chairImage, './img/sidebar/chair.png')
  }
})

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
function changeImagePath(element, path) {
  element.src = path
  return
}

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

let mobileNavbarBurger = document.querySelector('.mobile-navbar__burger')
let mobileSidebar = document.querySelector('.mobile-sidebar')

mobileNavbarBurger.addEventListener('click', () => {
  mobileNavbarBurger.classList.toggle('burger-active')
  mobileSidebar.classList.toggle('mobile-sidebar-opened')
  if (document.querySelector('.mobile-subcategory').classList.contains('mobile-subcategory-opened')) {
    document.querySelector('.mobile-subcategory').classList.remove('mobile-subcategory-opened')
  }
})
if (mobileSidebar.classList.contains('mobile-sidebar-opened')) {
  document.documentElement.style.overflow = 'hidden'
}

let mobileSubcategoryTitle = document.querySelector('.mobile-subcategory-title')

document.querySelectorAll('.mobile-sidebar-categories__item').forEach((item) => {
  item.addEventListener('click', () => {
    mobileSubcategoryTitle.children[1].textContent = item.firstElementChild.children[1].textContent
    document.querySelector('.mobile-subcategory').classList.add('mobile-subcategory-opened')
  })
})

mobileSubcategoryTitle.querySelector('img').addEventListener('click', () => {
  document.querySelector('.mobile-subcategory').classList.remove('mobile-subcategory-opened')
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
