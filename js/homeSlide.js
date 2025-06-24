const swiper = new Swiper(".hero-swiper", {
  // slidesPerView: auto,
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
