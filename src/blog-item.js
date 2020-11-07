$('.blog-item-slider__wrapper').slick({
  slidesToShow: 3,
  centerPadding: '100px',
  centerMode: true,
  nextArrow: '<img class="blog-item-arrow arrow-right" src="product-page/arrowproduct.svg">',
  prevArrow: '<img class="blog-item-arrow arrow-left" src="product-page/arrowproduct.svg">',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: '10px',
        arrows: false,
      },
    },
  ],
})
