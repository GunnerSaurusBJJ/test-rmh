$('.blog-head__wrapper').slick({
  slidesToShow: 3,
  mobileFirst: true,
  responsive: [
        {
                breakpoint: 900,
                settings: 'unslick'
        }
  ],
  arrows: false
});