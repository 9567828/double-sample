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
