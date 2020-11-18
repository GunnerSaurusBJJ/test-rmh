const sortBtn = document.querySelector('.full-catalog-filters-sort'),
  sortList = document.querySelector('.sort-list'),
  sortListItem = document.querySelectorAll('.sort-list li'),
  arrowSortBtn = document.querySelector('.full-catalog-filters-sort img'),
  mobileFilterItems = document.querySelectorAll('.catalog-filter-mobile-item'),
  sidebarFilterBtns = document.querySelectorAll('.catalog-filter-sidebar__btn'),
  allFiltersBtn = document.querySelector('.all-filters'),
  closeSideBarFilter = document.querySelector('.close-sidebar-filter'),
  dropdownMenuAnimated = document.querySelectorAll('.dropdown_menu--animated'),
  mobileFilterCatItems = document.querySelectorAll('.item-cat')

sortBtn.addEventListener('click', (e) => {
  if (e.target === sortBtn || e.target === sortBtn.querySelector('span') || e.target === sortBtn.querySelector('img')) {
    dropdownMenuAnimated.forEach((i) => i.classList.toggle('display-block'))
    sortBtn.querySelector('img').style.transform = sortBtn.querySelector('ul').classList.contains('display-block') ? 'rotate(180deg)' : 'rotate(0)'
  }
})

mobileFilterCatItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.add('sidebar-filter-visible')
    item.nextElementSibling.querySelector('.back-to-all').addEventListener('click', () => {
      item.nextElementSibling.classList.remove('sidebar-filter-visible')
    })
    item.nextElementSibling.querySelector('.close-sidebar-filter').addEventListener('click', () => {
      item.nextElementSibling.classList.remove('sidebar-filter-visible')
      document.querySelector('.catalog-filter-sidebar').classList.remove('sidebar-filter-visible')
      document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
    })
  })
})

dropdownMenuAnimated.forEach((i) => {
  i.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', (e) => {
      i.classList.remove('display-block')
      sortBtn.querySelector('span').textContent = li.textContent
      sortBtn.querySelector('img').style.transform = 'rotate(0)'
    })
  })
})

let filterBackGround = document.querySelector('.filter-sidebar-background')
document.addEventListener('click', (e) => {
  if (filterBackGround.classList.contains('filter-sidebar-background-visible') && e.target === filterBackGround) {
    document.documentElement.style.overflow = 'auto'
    filterBackGround.classList.remove('filter-sidebar-background-visible')
    document.querySelector('.catalog-filter-sidebar').classList.remove('choose-material-visible')
    document.querySelector('.catalog-filter-sidebar').classList.remove('sidebar-filter-visible')
    sidebarFilterBtns.forEach((btn) => {
      let content = btn.nextElementSibling
      content.style.maxHeight = null
      btn.querySelector('img').style.transform = 'rotate(0deg)'
    })
  }
})

function openFilterSidebar() {
  document.querySelector('.filter-sidebar-background').classList.add('filter-sidebar-background-visible')
  document.querySelector('.catalog-filter-sidebar').classList.add('sidebar-filter-visible')
  document.querySelector('html').style.overflow = 'hidden'
}

function closeAllAccordeons() {
  sidebarFilterBtns.forEach((btn) => {
    let content = btn.nextElementSibling
    content.style.maxHeight = null
    btn.querySelector('img').style.transform = 'rotate(0deg)'
  })
}

allFiltersBtn.addEventListener('click', () => {
  openFilterSidebar()
  sidebarFilterBtns.forEach((btn) => {
    let content = btn.nextElementSibling
    // if (!btn.querySelector('.chosen-filter').textContent.length) {
    content.style.maxHeight = content.scrollHeight + 'px'
    btn.querySelector('img').style.transform = 'rotate(180deg)'
    // }
  })
})

// opened accordeon depends on btn

const filterBtnsIds = ['#category-btn', '#form-btn', '#price-btn', '#size-btn', '#color-btn', '#type-cover-btn']
const sidebarFilterBtnsIds = ['#category', '#form', '#price', '#size', '#color', '#type-cover']

filterBtnsIds.forEach((btn, idx) => {
  document.querySelector(btn).addEventListener('click', (e) => {
    if (e.target !== document.querySelector(btn).querySelector('img')) {
      openFilterSidebar()
      let content = document.querySelector(`.catalog-filter-sidebar ${sidebarFilterBtnsIds[idx]} .catalog-filter-sidebar__content`)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

// close sidebar filter

closeSideBarFilter.addEventListener('click', () => {
  document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
  document.querySelector('.catalog-filter-sidebar').classList.remove('sidebar-filter-visible')
  document.querySelector('html').style.overflow = 'scroll'
  closeAllAccordeons()
})

// Range slider

let inputLeft = document.getElementById('input-left')
let inputRight = document.getElementById('input-right')

let thumbLeft = document.querySelector('.slider > .thumb.left')
let thumbRight = document.querySelector('.slider > .thumb.right')
let range = document.querySelector('.slider > .range')
let fromPriceTxt = document.querySelector('.chosen-filter.price')
function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max)

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1)

  let percent = ((_this.value - min) / (max - min)) * 100

  thumbLeft.style.left = percent + '%'
  range.style.left = percent + '%'
  fromPriceTxt.querySelector('.from').textContent = `от ${_this.value} - `
}
setLeftValue()

function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max)

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1)

  let percent = ((_this.value - min) / (max - min)) * 100

  thumbRight.style.right = 100 - percent + '%'
  range.style.right = 100 - percent + '%'
  fromPriceTxt.querySelector('.to').textContent = _this.value
}
setRightValue()

inputLeft.addEventListener('input', setLeftValue)
inputRight.addEventListener('input', setRightValue)

inputLeft.addEventListener('mouseover', function () {
  thumbLeft.classList.add('hover')
})
inputLeft.addEventListener('mouseout', function () {
  thumbLeft.classList.remove('hover')
})
inputLeft.addEventListener('mousedown', function () {
  thumbLeft.classList.add('active')
})
inputLeft.addEventListener('mouseup', function () {
  thumbLeft.classList.remove('active')
})

inputRight.addEventListener('mouseover', function () {
  thumbRight.classList.add('hover')
})
inputRight.addEventListener('mouseout', function () {
  thumbRight.classList.remove('hover')
})
inputRight.addEventListener('mousedown', function () {
  thumbRight.classList.add('active')
})
inputRight.addEventListener('mouseup', function () {
  thumbRight.classList.remove('active')
})

//binding price value with price range slider in filter
let inputFromPrice = document.querySelector('.sidebar-filter-input-from')
let inputToPrice = document.querySelector('.sidebar-filter-input-to')

inputFromPrice.value = inputLeft.value
inputToPrice.value = inputRight.value

inputLeft.addEventListener('input', () => {
  inputFromPrice.value = inputLeft.value
})

inputRight.addEventListener('input', () => {
  inputToPrice.value = inputRight.value
})
// Range slider for mobile

let inputLeftMobile = document.querySelector('.mobile-filter-price #input-left')
let inputRightMobile = document.querySelector('.mobile-filter-price #input-right')

let thumbLeftMobile = document.querySelector('.mobile-filter-price .slider > .thumb.left')
let thumbRightMobile = document.querySelector('.mobile-filter-price .slider > .thumb.right')
let rangeMobile = document.querySelector('.mobile-filter-price .slider > .range')

function setLeftValueMobile() {
  let _this = inputLeftMobile,
    min = parseInt(_this.min),
    max = parseInt(_this.max)

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRightMobile.value) - 1)

  let percent = ((_this.value - min) / (max - min)) * 100

  thumbLeftMobile.style.left = percent + '%'
  rangeMobile.style.left = percent + '%'
}
setLeftValueMobile()

function setRightValueMobile() {
  let _this = inputRightMobile,
    min = parseInt(_this.min),
    max = parseInt(_this.max)

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeftMobile.value) + 1)

  let percent = ((_this.value - min) / (max - min)) * 100

  thumbRightMobile.style.right = 100 - percent + '%'
  rangeMobile.style.right = 100 - percent + '%'
}
setRightValueMobile()

inputLeftMobile.addEventListener('input', setLeftValueMobile)
inputRightMobile.addEventListener('input', setRightValueMobile)

inputLeftMobile.addEventListener('mouseover', function () {
  thumbLeftMobile.classList.add('hover')
})
inputLeftMobile.addEventListener('mouseout', function () {
  thumbLeftMobile.classList.remove('hover')
})
inputLeftMobile.addEventListener('mousedown', function () {
  thumbLeftMobile.classList.add('active')
})
inputLeftMobile.addEventListener('mouseup', function () {
  thumbLeftMobile.classList.remove('active')
})

inputRightMobile.addEventListener('mouseover', function () {
  thumbRightMobile.classList.add('hover')
})
inputRightMobile.addEventListener('mouseout', function () {
  thumbRightMobile.classList.remove('hover')
})
inputRightMobile.addEventListener('mousedown', function () {
  thumbRightMobile.classList.add('active')
})
inputRightMobile.addEventListener('mouseup', function () {
  thumbRightMobile.classList.remove('active')
})

//binding price value with price range slider in filter
let inputFromPriceMobile = document.querySelector('.mobile-filter-price .sidebar-filter-input-from')
let inputToPriceMobile = document.querySelector('.mobile-filter-price .sidebar-filter-input-to')

inputFromPriceMobile.value = inputLeftMobile.value
inputToPriceMobile.value = inputRightMobile.value

inputLeftMobile.addEventListener('input', () => {
  inputFromPriceMobile.value = inputLeftMobile.value
})

inputRightMobile.addEventListener('input', () => {
  inputToPriceMobile.value = inputRightMobile.value
})

// sidebar filter section
let watchFilteredBtn = document.querySelector('.watch-filtered-btn')

watchFilteredBtn.addEventListener('click', () => {
  addCounterToBtn()
  closeAllAccordeons()
  document.querySelectorAll('.catalog-filter-sidebar-subcategory.only-mobile').forEach((i) => i.classList.remove('sidebar-filter-visible'))
})
function addCounterToBtn() {
  fromPriceTxt.classList.remove('display-none')
  document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
  document.querySelector('html').style.overflow = 'scroll'
  // add text to btn
  // to category btn
  let categoryCountText = document.querySelector('.category-count')
  categoryCountText.innerHTML =
    categoryCount > 0 ? `: ${categoryCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-category-btn">` : ''
  let categoryFilterBtn = document.querySelector('#category-btn')

  if (categoryCount > 0) {
    categoryFilterBtn.style.background = '#2E394D'
    categoryFilterBtn.style.color = '#fff'
  } else {
    categoryFilterBtn.style.background = '#F5F6FA'
    categoryFilterBtn.style.color = '#282724'
  }

  if (document.querySelector('#remove-category-btn')) {
    document.querySelector('#remove-category-btn').addEventListener('click', () => {
      setTimeout(() => {
        // if remove timeout sidebar won't be closed by click on the croos image on filter btn
        categoryCheckboxes.forEach((item) => (item.checked = false))
        categoryCount = 0
        categoryCountText.textContent = ''
        categoryFilterBtn.style.background = '#F5F6FA'
        categoryFilterBtn.style.color = '#282724'
        document.querySelector('.chosen-filter.category').textContent = ''
      }, 0)
    })
  }
  let categoryArray = []
  categoryCheckboxes.forEach((item) => {
    if (item.checked) {
      categoryArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.category').textContent = categoryArray
    }
  })
  // add value to price btn
  const mainPriceBtnText = document.querySelector('.price-count')
  mainPriceBtnText.innerHTML =
    fromPriceTxt.querySelector('.from').textContent +
    fromPriceTxt.querySelector('.to').textContent +
    '| <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-price-btn">'
  const mainPriceBtn = document.querySelector('#price-btn')
  mainPriceBtn.style.background = '#2E394D'
  mainPriceBtn.style.color = '#fff'
  if (document.querySelector('#remove-price-btn')) {
    document.querySelector('#remove-price-btn').addEventListener('click', () => {
      mainPriceBtn.style.background = '#F5F6FA'
      mainPriceBtn.style.color = '#282724'
      mainPriceBtnText.textContent = ''
    })
  }
  // to form btn
  let formCountText = document.querySelector('.form-count')
  formCountText.innerHTML = formCount > 0 ? `: ${formCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-form-btn">` : ''

  let formFilterBtn = document.querySelector('#form-btn')
  if (formCount > 0) {
    formFilterBtn.style.background = '#2E394D'
    formFilterBtn.style.color = '#fff'
  } else {
    formFilterBtn.style.background = '#F5F6FA'
    formFilterBtn.style.color = '#282724'
  }

  if (document.querySelector('#remove-form-btn')) {
    document.querySelector('#remove-form-btn').addEventListener('click', () => {
      setTimeout(() => {
        formCheckboxes.forEach((item) => (item.checked = false))
        formCount = 0
        formCountText.textContent = ''
        formFilterBtn.style.background = '#F5F6FA'
        formFilterBtn.style.color = '#282724'
        document.querySelector('.chosen-filter.form').textContent = ''
      }, 0)
      // if remove timeout sidebar won't be closed by click on the croos image on filter btn
    })
  }
  let formArray = []
  formCheckboxes.forEach((item) => {
    if (item.checked) {
      formArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.form').textContent = formArray
    }
  })
  // to size btn
  let sizeCountText = document.querySelector('.size-count')
  sizeCountText.innerHTML = sizeCount > 0 ? `: ${sizeCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-size-btn">` : ''

  let sizeFilterBtn = document.querySelector('#size-btn')
  if (sizeCount > 0) {
    sizeFilterBtn.style.background = '#2E394D'
    sizeFilterBtn.style.color = '#fff'
  } else {
    sizeFilterBtn.style.background = '#F5F6FA'
    sizeFilterBtn.style.color = '#282724'
  }
  if (document.querySelector('#remove-size-btn')) {
    document.querySelector('#remove-size-btn').addEventListener('click', () => {
      setTimeout(() => {
        sizeCheckboxes.forEach((item) => (item.checked = false))
        sizeCount = 0
        sizeCountText.textContent = ''
        sizeFilterBtn.style.background = '#F5F6FA'
        sizeFilterBtn.style.color = '#282724'
        document.querySelector('.chosen-filter.size').textContent = ''
      }, 0)
      // if remove timeout sidebar won't be closed by click on the croos image on filter btn
    })
  }
  let sizeArray = []
  sizeCheckboxes.forEach((item) => {
    if (item.checked) {
      sizeArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.size').textContent = sizeArray
    }
  })
  // to color btn
  let colorCountText = document.querySelector('.color-count')
  colorCountText.innerHTML = colorCount > 0 ? `: ${colorCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-color-btn">` : ''

  let colorFilterBtn = document.querySelector('#color-btn')
  if (colorCount > 0) {
    colorFilterBtn.style.background = '#2E394D'
    colorFilterBtn.style.color = '#fff'
  } else {
    colorFilterBtn.style.background = '#F5F6FA'
    colorFilterBtn.style.color = '#282724'
  }
  if (document.querySelector('#remove-color-btn')) {
    document.querySelector('#remove-color-btn').addEventListener('click', () => {
      setTimeout(() => {
        colorCheckboxes.forEach((item) => (item.checked = false))
        colorCount = 0
        colorCountText.textContent = ''
        colorFilterBtn.style.background = '#F5F6FA'
        colorFilterBtn.style.color = '#282724'
        document.querySelector('.chosen-filter.color').textContent = ''
      }, 0)
      // if remove timeout sidebar won't be closed by click on the croos image on filter btn
    })
  }
  let colorArray = []
  colorCheckboxes.forEach((item) => {
    if (item.checked) {
      colorArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.color').textContent = colorArray
    }
  })

  //type cover
  let typeCountText = document.querySelector('.type-cover-count')
  typeCountText.innerHTML = typeCount > 0 ? `: ${typeCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-type-btn">` : ''

  let typeFilterBtn = document.querySelector('#type-cover-btn')
  if (typeCount > 0) {
    typeFilterBtn.style.background = '#2E394D'
    typeFilterBtn.style.color = '#fff'
  } else {
    typeFilterBtn.style.background = '#F5F6FA'
    typeFilterBtn.style.color = '#282724'
  }
  if (document.querySelector('#remove-type-btn')) {
    document.querySelector('#remove-type-btn').addEventListener('click', () => {
      setTimeout(() => {
        typeCheckboxes.forEach((item) => (item.checked = false))
        typeCount = 0
        typeCountText.textContent = ''
        typeFilterBtn.style.background = '#F5F6FA'
        typeFilterBtn.style.color = '#282724'
        document.querySelector('.chosen-filter.type-cover').textContent = ''
      }, 0)
      // if remove timeout sidebar won't be closed by click on the croos image on filter btn
    })
  }
  let typeArray = []
  typeCheckboxes.forEach((item) => {
    if (item.checked) {
      typeArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.type-cover').textContent = typeArray
    }
  })
}
// filters count
let categoryCount = 0
let formCount = 0
let priceCount = 0
let sizeCount = 0
let colorCount = 0
let typeCount = 0

const categoryCheckboxes = document.querySelectorAll('#category input')
categoryCheckboxes.forEach((chbx) => {
  chbx.addEventListener('change', () => {
    chbx.checked ? categoryCount++ : categoryCount--
  })
})

const formCheckboxes = document.querySelectorAll('#form input')
formCheckboxes.forEach((chbx) => {
  chbx.addEventListener('change', () => {
    chbx.checked ? formCount++ : formCount--
  })
})

const sizeCheckboxes = document.querySelectorAll('#size input')
sizeCheckboxes.forEach((chbx) => {
  chbx.addEventListener('change', () => {
    chbx.checked ? sizeCount++ : sizeCount--
  })
})

const colorCheckboxes = document.querySelectorAll('#color input')
colorCheckboxes.forEach((chbx) => {
  chbx.addEventListener('change', () => {
    chbx.checked ? colorCount++ : colorCount--
  })
})

const typeCheckboxes = document.querySelectorAll('#type-cover input')
typeCheckboxes.forEach((chbx) => {
  chbx.addEventListener('change', () => {
    chbx.checked ? typeCount++ : typeCount--
  })
})

let btnFiltersObj = {
  '.color-count': '#color-btn',
  '.type-cover-count': '#type-cover-btn',
  '.size-count': '#size-btn',
  '.form-count': '#form-btn',
  '.category-count': '#category-btn',
  '.price-count': '#price-btn',
}

let chosenFiltersText = ['.chosen-filter.category', '.chosen-filter.size', '.chosen-filter.form', '.chosen-filter.type-cover', '.chosen-filter.color']
// clear all filters and add chosen filters in main categories
const clearAllFiltersBtn = document.querySelector('.clear-filter-btn')
const mobChbxFilter = document.querySelectorAll('.catalog-filter-sidebar__content-item input')
let mobCounter = 0
let mobMainCategory = []
let mobMainForm = []
let mobMainPrice = []
let mobMainSize = []
let mobMainCase = []
let mobMainColor = []
let mobMainMat = []

function addChosenFilters(category, checkbox, checkboxParent) {
  category.push(checkbox.nextElementSibling.textContent.trim())
  if (category.length) {
    checkboxParent.parentElement.querySelector('.chosen-mob-filter').textContent = category
    checkboxParent.style.paddingBottom = '30px'
  }
}

function removeChosenFilters(category, checkbox, checkboxParent) {
  category.splice(category.indexOf(checkbox.nextElementSibling.textContent.trim()), 1)
  if (category.length) {
    checkboxParent.parentElement.querySelector('.chosen-mob-filter').textContent = category
    checkboxParent.style.paddingBottom = '30px'
  } else {
    checkboxParent.parentElement.querySelector('.chosen-mob-filter').textContent = ''
    checkboxParent.style.paddingBottom = '20px'
  }
}

mobChbxFilter.forEach((chbx, idx) => {
  chbx.addEventListener('change', () => {
    if (window.innerWidth < 576) {
      let mainParent = chbx.closest('.catalog-filter-sidebar-subcategory.only-mobile').previousElementSibling
      if (chbx.checked) {
        mobCounter++
        if (mainParent.parentElement.id === 'mob-item-cat') {
          addChosenFilters(mobMainCategory, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-form') {
          addChosenFilters(mobMainForm, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-size') {
          addChosenFilters(mobMainSize, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-case') {
          addChosenFilters(mobMainCase, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-color') {
          addChosenFilters(mobMainColor, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-mat') {
          addChosenFilters(mobMainMat, chbx, mainParent)
        }
      } else {
        mobCounter--
        if (mainParent.parentElement.id === 'mob-item-cat') {
          removeChosenFilters(mobMainCategory, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-form') {
          removeChosenFilters(mobMainForm, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-size') {
          removeChosenFilters(mobMainSize, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-case') {
          removeChosenFilters(mobMainCase, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-color') {
          removeChosenFilters(mobMainColor, chbx, mainParent)
        }
        if (mainParent.parentElement.id === 'mob-item-mat') {
          removeChosenFilters(mobMainMat, chbx, mainParent)
        }
      }
      if (mobCounter > 0) {
        clearAllFiltersBtn.classList.remove('disabled-clear-filter')
      } else clearAllFiltersBtn.classList.add('disabled-clear-filter')
    }
  })
})
clearAllFiltersBtn.addEventListener('click', () => {
  document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
  document.querySelectorAll('.catalog-filter-sidebar-subcategory.only-mobile').forEach((i) => i.classList.remove('sidebar-filter-visible'))
  document.querySelector('html').style.overflow = 'scroll'
  categoryCheckboxes.forEach((item) => (item.checked = false))
  formCheckboxes.forEach((item) => (item.checked = false))
  sizeCheckboxes.forEach((item) => (item.checked = false))
  colorCheckboxes.forEach((item) => (item.checked = false))
  typeCheckboxes.forEach((item) => (item.checked = false))
  mobChbxFilter.forEach((item) => (item.checked = false))
  mobileFilterItems.forEach((i) => {
    i.querySelector('.chosen-mob-filter').textContent = ''
    i.querySelector('.item-cat').style.paddingBottom = '20px'
  })
  categoryCount = 0
  formCount = 0
  sizeCount = 0
  colorCount = 0
  typeCount = 0

  Object.entries(btnFiltersObj).forEach(([key, value]) => {
    document.querySelector(key).textContent = ''
    document.querySelector(value).style.background = '#F5F6FA'
    document.querySelector(value).style.color = '#282724'
  })
  chosenFiltersText.forEach((item) => {
    document.querySelector(item).textContent = ''
  })
  fromPriceTxt.classList.add('display-none')
  clearAllFiltersBtn.classList.add('disabled-clear-filter')
})

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

function addToFavIconActive(card, iconClass, lineClass) {
  card.querySelector(iconClass).classList.toggle('love')
  card.querySelectorAll(lineClass).forEach((i) => i.classList.add('active'))
  card.querySelector(iconClass).classList.add('active')
  setTimeout(() => {
    card.querySelectorAll(lineClass).forEach((i) => i.classList.remove('active'))
    card.querySelector(iconClass).classList.remove('active')
  }, 300)
}

sidebarFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let content = btn.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
      btn.querySelector('img').style.transform = 'rotate(0deg)'
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
      btn.querySelector('img').style.transform = 'rotate(180deg)'
    }
  })
})
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

document.querySelectorAll('.help-section__label').forEach((i) => {
  i.addEventListener('click', function () {
    this.previousElementSibling.focus()
  })
})

let inputTel = document.querySelector('.help-section__input-wrapper input[type="tel"]')
let im = new Inputmask('+7 ( 999 ) 999-99-99')
im.mask(inputTel)

const cardSizeBtnWrapper = document.querySelectorAll('.card-sizes__btns'),
  cardColorBtnWrapper = document.querySelectorAll('.card-colors__btns')
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
