const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");

let imgIndex = 1;
let intervalId;
const autoSlide = () => {
  intervalId = setInterval(() => slideImg(++imgIndex), 2000);
};
autoSlide();
const slideImg = () => {
  imgIndex =
    imgIndex === images.length
      ? 0
      : imgIndex < 0
      ? images.length - 1
      : imgIndex;
  carousel.style.transform = `translateX(-${imgIndex * 100}%)`;
};
const updateClick = (e) => {
  clearInterval(intervalId);
  imgIndex += e.target.id === "next" ? 1 : -1;
  slideImg();
};
buttons.forEach((btn) => btn.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);
