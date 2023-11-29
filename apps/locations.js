const intro = document.querySelector("#intro");

const introInnerHeight = window.innerHeight;
const introSlide = () => {
  intro.style.top = `-${introInnerHeight}px`;
}

const introMainMenu = () => {
  introSlide();
  setTimeout(() => {
    intro.remove();
  }, 2100);
}