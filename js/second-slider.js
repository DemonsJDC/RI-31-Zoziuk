new Swiper('#our-models .swiper', {
  slidesPerView: 4, 

  slidesPerGroupAuto: true,
    initialSlide: 4, 
  slidesOffsetBefore: 80,
  slidesOffsetAfter: 80,
  spaceBetween: 100,

  slidesPerGroup: 4, 
  navigation: {
    nextEl: '#our-models .swiper-button-next',
    prevEl: '#our-models .swiper-button-prev'
  },

  pagination: {
    el: '#our-models .swiper-pagination',
    clickable: true,
      dynamicBullets: true
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },

  speed: 800,


  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    1030: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },

    1560: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    2024: {
      slidesPerView: 4
    }
  }
});
