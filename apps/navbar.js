const globalNavbar = document.querySelector(".menu");
const globalNavbarBtn = document.querySelector(".navbar-icon >button");

const toggleNavbar = () => {

    // globalNavbar.classList.toggle("navbar-active");

    if(globalNavbar.classList.contains("navbar-active")) {
        globalNavbarBtn.style.top="0px";
        globalNavbar.style.animation="navAnimationBottom 1s ease-out ";
        globalNavbarBtn.style.animation="navAnimationBottom 1s ease-out ";
        globalNavbar.classList.remove("navbar-active");


    }else{
        globalNavbar.classList.add("navbar-active");
        globalNavbarBtn.style.top="-35px";
        globalNavbar.style.animation="navAnimationTop 1s ease-out ";
        globalNavbarBtn.style.animation="navAnimationTop 1s ease-out ";
    }
};
