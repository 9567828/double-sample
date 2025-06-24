const detailImg = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: detailImg,
  },
});

const reviewImg = new Swiper(".review-swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
