const intro = document.querySelector("#intro");
const homePage = document.querySelector("#homePage");

const introInnerWidth = window.innerWidth;
const introSlide = () => {
  intro.style.left = `-${introInnerWidth}px`;
    homePage.style.display="block";
}

const introMainMenu = () => {
  introSlide();
  setTimeout(() => {
    intro.remove();
  }, 2100);
}