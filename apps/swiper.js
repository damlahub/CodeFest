const swiperData = [
  "assets/gallery.jpg",
  "assets/WhatsApp Image 2023-08-29 at 17.25.16.jpeg",
  "assets/WhatsApp Image 2023-08-29 at 17.25.50.jpeg",
  "assets/IMG20220725203935.jpg",
  "assets/IMG20220726124244.jpg",
]

let gallery = document.getElementById('gallery');
let swiperContent = document.createElement('div');
swiperContent.classList.add("swiper", "mySwiper");
let swiperWrapper = document.createElement('div');
swiperWrapper.classList.add("swiper-wrapper");

swiperData.map((swiperImg) => {
  let swiperSlide = document.createElement('div');
  swiperSlide.classList.add("swiper-slide");
  let img = document.createElement('img');
  img.src = swiperImg;
  swiperSlide.appendChild(img);
  swiperWrapper.appendChild(swiperSlide);
});
let swiperPagination = document.createElement('div');
swiperPagination.classList.add("swiper-pagination");

swiperContent.appendChild(swiperWrapper);
swiperContent.appendChild(swiperPagination);
gallery.appendChild(swiperContent);

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});