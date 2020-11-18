// $('.blog-head__wrapper').slick({
//   slidesToShow: 3,
//   mobileFirst: true,
//   centerPadding: '10px',
//   centerMode: true,
//   responsive: [
//     {
//       breakpoint: 576,
//       settings: 'unslick',
//     },
//   ],
//   arrows: false,
// })

let sortBtn = document.querySelector('.full-catalog-filters-sort')
let dropdownMenuAnimated = document.querySelectorAll('.dropdown_menu--animated')
sortBtn.addEventListener('click', (e) => {
  if (e.target === sortBtn || e.target === sortBtn.querySelector('span') || e.target === sortBtn.querySelector('img')) {
    document.querySelectorAll('.dropdown_menu--animated').forEach((i) => i.classList.toggle('display-block'))
    sortBtn.querySelector('img').style.transform = sortBtn.querySelector('ul').classList.contains('display-block') ? 'rotate(180deg)' : 'rotate(0)'
  }
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
