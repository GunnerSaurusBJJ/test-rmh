const sidebarItems = document.querySelectorAll('.sidebar-products'),
openedSideBar = document.querySelector('.sidebar-opened'),
openedSideBarBackGround = document.querySelector('.sidebar-opened-background')
closeSideBarBtn = document.querySelector('.close-sidebar'),
sofaImage = document.querySelector('.sidebar-item__sofa-image'),
bedImage = document.querySelector('.sidebar-item__bed-image'),
armchairImage = document.querySelector('.sidebar-item__armchair-image'),
chairImage = document.querySelector('.sidebar-item__chair-image'),
sidebarClock = document.querySelector('.sidebar-opened__clock')

var date = new Date();
let countDownDateForProductOfTheDay = date.setDate(date.getDate() + 1);

sidebarItems.forEach(item => {
  item.addEventListener('click', toggleClassSidebar)
})

closeSideBarBtn.addEventListener('click', toggleClassSidebar)

sofaImage.addEventListener('mouseover', () => {
  changeImagePath(sofaImage, './img/sidebar/sofa-hover.svg')
})


sofaImage.addEventListener('mouseleave', () => {
  changeImagePath(sofaImage, './img/sidebar/sofa.svg')
})

bedImage.addEventListener('mouseover', () => {
  changeImagePath(bedImage, './img/sidebar/bed-hover.svg')
})

bedImage.addEventListener('mouseleave', () => {
  changeImagePath(bedImage, './img/sidebar/bed.svg')
})

// armchairImage.addEventListener('mouseover', () => {
//   changeImagePath(armchairImage, './img/sidebar/armchair-hover.svg')
// })

// armchairImage.addEventListener('mouseleave', () => {
//   changeImagePath(armchairImage, './img/sidebar/armchair.svg')
// })


chairImage.addEventListener('mouseover', () => {
  changeImagePath(chairImage, './img/sidebar/chair-hover.svg')
})

chairImage.addEventListener('mouseleave', () => {
  changeImagePath(chairImage, './img/sidebar/chair.svg')
})

function toggleClassSidebar (e) {
  let title = document.querySelector('.sidebar-opened-title h2')
  openedSideBar.classList.toggle('open-sidebar')
  openedSideBarBackGround.classList.toggle('sidebar-background-visible')
  if (openedSideBarBackGround.classList.contains('sidebar-background-visible')) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = 'auto'
  }
  const obj = {
    sofa: 'Диваны',
    bed: 'Кровати',
    armchair: 'Кресла',
    chair: 'Стулья',
  }
  Object.entries(obj).forEach(([key, value]) => {
    if (e.target.parentElement.id === key || e.target.id === key ) {
      title.textContent = value
    }
  })
}

document.addEventListener('click', (e) => {
  if (openedSideBarBackGround.classList.contains('sidebar-background-visible') && e.target === openedSideBarBackGround) {
    document.documentElement.style.overflow = 'auto'
    openedSideBarBackGround.classList.remove('sidebar-background-visible')
    openedSideBar.classList.remove('open-sidebar')
  }
})
function changeImagePath (element, path) {
  element.src = path
  return
}

setInterval(() => {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDateForProductOfTheDay - now;
  // Time calculations for days, hours, minutes and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  sidebarClock.innerHTML = hours + "ч | "
  + minutes + "м | " + seconds + "с ";
  // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   sidebarClock.innerHTML = "EXPIRED";
  // }
}, 1000);