const intro = document.querySelector("#intro");
const homePage = document.querySelector("#homePage");

const introInnerHeight = window.innerHeight;
const introSlide = () => {
  intro.style.top = `-${introInnerHeight}px`;
  setTimeout(() => {
    homePage.style.display="block";
  }, 2100);
}

const introMainMenu = () => {
  introSlide();
  setTimeout(() => {
    intro.remove();
  }, 2100);
}