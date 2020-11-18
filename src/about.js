if (window.innerWidth > 900) {
  $('#carousel').Cloud9Carousel({
    buttonLeft: $('#buttons > .right'),
    buttonRight: $('#buttons > .left'),
    bringToFront: true,
    speed: 2,
    yOrigin: 40,
    farScale: 0.5,
    xRadius: 600,
    yRadius: 60,
  })
}
if (window.innerWidth < 900) {
  $('#carousel').Cloud9Carousel({
    buttonLeft: $('#buttons > .right'),
    buttonRight: $('#buttons > .left'),
    bringToFront: true,
    speed: 2,
    yOrigin: 40,
    farScale: 0.5,
    xRadius: 400,
    yRadius: 30,
  })
}
const images = document.querySelectorAll('.about-slider #carousel img')
const buttons = document.querySelectorAll('.about-slider #buttons button')

// buttons.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     images.forEach((img) => {
//       const scale = getComputedStyle(img)
//         .transform.match(/matrix.*\((.+)\)/)[1]
//         .split(', ')[3]
//       img.style.filter = scale < 0.5 ? 'blur(5px)' : 'blur(0px)'
//     })
//   })
// })
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
    collectionsPoints.forEach((item) => {
      if (item.id !== point.id) {
        item.classList.remove('collection-point-active')
      }
    })
    point.nextElementSibling.classList.toggle('collection-anim')
    point.classList.toggle('collection-point-active')
  })
})
