new Swiper('.swiper', {
  loop: true,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  effect: 'slide', 
  speed: 800,
  on: {
    slideChangeTransitionStart: () => {
      document.querySelectorAll('.slide-text').forEach(el => el.style.opacity = 0);
    },
    slideChangeTransitionEnd: () => {
      const activeSlide = document.querySelector('.swiper-slide-active .slide-text');
      if (activeSlide) activeSlide.style.opacity = 1;
    }
  }
});

