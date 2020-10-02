const sortBtn = document.querySelector('.full-catalog-filters-sort'),
sortList = document.querySelector('.sort-list'),
sortListItem = document.querySelectorAll('.sort-list li')
arrowSortBtn = document.querySelector('.full-catalog-filters-sort img'),
sidebarFilterBtns = document.querySelectorAll('.catalog-filter-sidebar__btn'),
allFiltersBtn = document.querySelector('.all-filters'),
closeSideBarFilter = document.querySelector('.close-sidebar-filter')

sortBtn.addEventListener('click', () => {
  sortList.classList.toggle('sort-list-visible')
  arrowSortBtn.classList.toggle('rotate-arrow')
})

if (sortList.classList.contains('sort-list-visible')) {
  sortListItem.forEach(item => {
    item.addEventListener('click', () => {
      sortList.classList.remove('sort-list-visible')
      sortBtn.firstElementChild.textContent = item.textContent
      arrowSortBtn.classList.toggle('rotate-arrow')
    })
  })
}


let filterBackGround = document.querySelector('.filter-sidebar-background')
document.addEventListener('click', (e) => {
  if (filterBackGround.classList.contains('filter-sidebar-background-visible') && e.target === filterBackGround) {
    document.documentElement.style.overflow = 'auto'
    filterBackGround.classList.remove('filter-sidebar-background-visible')
    document.querySelector('.catalog-filter-sidebar').classList.remove('choose-material-visible')
  }
})

sidebarFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('content-hidden')
    btn.children[0].classList.toggle('sidebar-arrow-rotate')
  })
})

allFiltersBtn.addEventListener('click', () => {
  document.querySelector('.filter-sidebar-background').classList.add('filter-sidebar-background-visible')
  document.querySelector('.catalog-filter-sidebar').classList.add('sidebar-filter-visible')
  document.querySelector('html').style.overflow = 'hidden'
})

closeSideBarFilter.addEventListener('click', () => {
  document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
  document.querySelector('html').style.overflow = 'scroll'
})


// Range slider 

let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
	let _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	let percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	let _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	let percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

// sidebar filter section
let watchFilteredBtn = document.querySelector('.watch-filtered-btn')

watchFilteredBtn.addEventListener('click', addCounterToBtn)

function addCounterToBtn () {
  document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
  document.querySelector('html').style.overflow = 'scroll'
  // add text to btn
  // to category btn
  let categoryCountText = document.querySelector('.category-count')
  categoryCountText.innerHTML = categoryCount > 0 ? 
  `: ${categoryCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-category-btn">` : ''
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
      categoryCheckboxes.forEach(item => item.checked = false)
      categoryCount = 0
      categoryCountText.textContent = ''
      categoryFilterBtn.style.background = '#F5F6FA'
      categoryFilterBtn.style.color = '#282724'
    }) 
  }
    let categoryArray = []
    categoryCheckboxes.forEach(item => {
    if (item.checked) {
      categoryArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.category').textContent = categoryArray
    }
  })
  // to form btn
  let formCountText = document.querySelector('.form-count')
  formCountText.innerHTML = formCount > 0 ? 
  `: ${formCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-form-btn">` : ''
  
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
      formCheckboxes.forEach(item => item.checked = false)
      formCount = 0
      formCountText.textContent = ''
      formFilterBtn.style.background = '#F5F6FA'
      formFilterBtn.style.color = '#282724'
    })
  }
  let formArray = []
  formCheckboxes.forEach(item => {
    if (item.checked) {
      formArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.form').textContent = formArray
    }
  })
  // to size btn
  let sizeCountText = document.querySelector('.size-count')
  sizeCountText.innerHTML = sizeCount > 0 ? 
  `: ${sizeCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-size-btn">` : ''
  
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
      sizeCheckboxes.forEach(item => item.checked = false)
      sizeCount = 0
      sizeCountText.textContent = ''
      sizeFilterBtn.style.background = '#F5F6FA'
      sizeFilterBtn.style.color = '#282724'
    }) 
  }
  let sizeArray = []
  sizeCheckboxes.forEach(item => {
    if (item.checked) {
      sizeArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.size').textContent = sizeArray
    }
  })
  // to color btn
  let colorCountText = document.querySelector('.color-count')
  colorCountText.innerHTML = colorCount > 0 ? 
  `: ${colorCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-color-btn">` : ''
  
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
      colorCheckboxes.forEach(item => item.checked = false)
      colorCount = 0
      colorCountText.textContent = ''
      colorFilterBtn.style.background = '#F5F6FA'
      colorFilterBtn.style.color = '#282724'
    }) 
  }
  let colorArray = []
  colorCheckboxes.forEach(item => {
    if (item.checked) {
      colorArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.color').textContent = colorArray
    }
  })

  //type cover
  let typeCountText = document.querySelector('.type-cover-count')
  typeCountText.innerHTML = typeCount > 0 ? 
  `: ${typeCount} | <img src="./full-catalog/icons/close-filter-btn.svg" class="close-count-btn" id="remove-type-btn">` : ''
  
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
      typeCheckboxes.forEach(item => item.checked = false)
      typeCount = 0
      typeCountText.textContent = ''
      typeFilterBtn.style.background = '#F5F6FA'
      typeFilterBtn.style.color = '#282724'
    }) 
  }
  let typeArray = []
  typeCheckboxes.forEach(item => {
    if (item.checked) {
      typeArray.push(item.parentElement.textContent)
      document.querySelector('.chosen-filter.type-cover').textContent = typeArray
    }
  })
  document.querySelectorAll('.catalog-filter-sidebar__content').forEach(item => {
    item.classList.add('content-hidden')
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
categoryCheckboxes.forEach(chbx => {
  chbx.addEventListener('change', () => {
    chbx.checked ? categoryCount++ : categoryCount--
  })
})

const formCheckboxes = document.querySelectorAll('#form input')
formCheckboxes.forEach(chbx => {
  chbx.addEventListener('change', () => {
    chbx.checked ? formCount++ : formCount--
  })
})

const sizeCheckboxes = document.querySelectorAll('#size input')
sizeCheckboxes.forEach(chbx => {
  chbx.addEventListener('change', () => {
    chbx.checked ? sizeCount++ : sizeCount--
  })
})

const colorCheckboxes = document.querySelectorAll('#color input')
colorCheckboxes.forEach(chbx => {
  chbx.addEventListener('change', () => {
    chbx.checked ? colorCount++ : colorCount--
  })
})

const typeCheckboxes = document.querySelectorAll('#type-cover input')
typeCheckboxes.forEach(chbx => {
  chbx.addEventListener('change', () => {
    chbx.checked ? typeCount++ : typeCount--
  })
})

let btnFiltersObj = {
  '.color-count': '#color-btn',
  '.type-cover-count': '#type-cover-btn',
  '.size-count': '#size-btn',
  '.form-count': '#form-btn',
  '.category-count': '#category-btn'
}

let chosenFiltersText = ['.chosen-filter.category', '.chosen-filter.size', '.chosen-filter.form', '.chosen-filter.type-cover', '.chosen-filter.color']
// clear all filters
document.querySelector('.clear-filter-btn').addEventListener('click', () => {
  document.querySelector('.filter-sidebar-background').classList.remove('filter-sidebar-background-visible')
  document.querySelector('html').style.overflow = 'scroll'

  categoryCheckboxes.forEach(item => item.checked = false)
  formCheckboxes.forEach(item => item.checked = false)
  sizeCheckboxes.forEach(item => item.checked = false)
  colorCheckboxes.forEach(item => item.checked = false)
  typeCheckboxes.forEach(item => item.checked = false)

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
  chosenFiltersText.forEach(item => {
    document.querySelector(item).textContent = ''
  })
})