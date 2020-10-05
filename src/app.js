$(document).ready(function(){
  $('.slider-wrapper').slick({
    nextArrow: '<img class="top-slider__right-arrow top-slider-arrow" src="./icons/topslider/right-arrow.svg">',
    prevArrow: '<img class="top-slider__left-arrow top-slider-arrow" src="./icons/topslider/left-arrow.svg">',
  });
});
var date = new Date();
let countDownDiscountModal = date.setDate(date.getDate() + 3);

const modalDiscountClock = document.querySelector('.modal-discount__clock'),
modalDiscount = document.querySelector('.modal-discount'),
modalCloseBtn = document.querySelector('.modal-close'),
cardSizeBtnWrapper = document.querySelectorAll('.card-sizes__btns'),
cardColorBtnWrapper = document.querySelectorAll('.card-colors__btns')

setInterval(() => {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDiscountModal - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // Output the result in an element with id="demo"
  modalDiscountClock.innerHTML = days + "д | "
  + hours + "ч | " + minutes + "м ";
  // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   sidebarClock.innerHTML = "EXPIRED";
  // }
}, 1000);

setTimeout(() => {
  modalDiscount.classList.add('show-modal')
}, 5000)

modalCloseBtn.addEventListener('click', () => {
  modalDiscount.classList.remove('show-modal')
})

cardSizeBtnWrapper.forEach((item, idx) => {
  Array.from(item.children).forEach(btn => {
    btn.classList.add(`sizebtn${idx}`)
    btn.addEventListener('click', () => {
      document.querySelector(`.card-size__button-selected.sizebtn${idx}`).classList.remove('card-size__button-selected')
      btn.classList.add('card-size__button-selected')
    })
  })
})

cardColorBtnWrapper.forEach((item, idx) => {
  Array.from(item.children).forEach(btn => {
    btn.classList.add(`colorbtn${idx}`)
    btn.addEventListener('click', () => {
      document.querySelector(`.card-colors__selected.colorbtn${idx}`).classList.remove('card-colors__selected')
      btn.classList.add('card-colors__selected')
    })
  })
})

function magnify(imgID, zoom) { 
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

magnify("myimage", 1.5);

const collectionsPoints = document.querySelectorAll('.collection-point')
collectionsPoints.forEach((point, index) => {
  point.setAttribute('id', index)
  point.nextElementSibling.setAttribute('id', index)
  point.addEventListener('click', (e) => {
    document.querySelectorAll('.collection-card-opened').forEach(item => {
      if(item.id !== point.id) {
        item.classList.add('display-none')
      }
    })
    point.nextElementSibling.style.right = parseFloat(getComputedStyle(point).getPropertyValue('right')) - 230 + 'px'
    point.nextElementSibling.classList.toggle('display-none')
  })
})
