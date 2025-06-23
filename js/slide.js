const swiper = new Swiper(".mySwiper", {
  // autoWidth: false,
  // slidesPerView: auto,
  slidesPerView: 5,
  spaceBetween: 30,
  autoHeight: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const detailImg = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
