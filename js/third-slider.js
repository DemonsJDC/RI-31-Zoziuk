  new Swiper('#for-owners .swiper', {
    centeredSlides: true,
    spaceBetween: 100,
    slidesOffsetBefore: 80,
    slidesOffsetAfter: 80,
    speed: 700,
    
    initialSlide: 1,

    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
    },

    navigation: {
      nextEl: '#for-owners .swiper-button-next',
      prevEl: '#for-owners .swiper-button-prev'
    },

    pagination: {
      el: '#for-owners .swiper-pagination',
      clickable: true
    },



    breakpoints: {
      0: { slidesPerView: 1 },
      1000: { slidesPerView: 3 }
    }
  });
