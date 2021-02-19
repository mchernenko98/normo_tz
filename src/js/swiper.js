var swiper = new Swiper('.swiper-container', {
    loop: true,
    height: 123,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1440: {
        slidesPerView: 5.5,
        spaceBetween: 30,
      },
      1550: {
        slidesPerView: 6.5,
        spaceBetween: 30,
      }
    }
  });
