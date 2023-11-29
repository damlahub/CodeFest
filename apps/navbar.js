const globalNavbar = document.querySelector(".menu");
const globalNavbarBtn = document.querySelector(".navbar-icon >button");

const toggleNavbar = () => {

    // globalNavbar.classList.toggle("navbar-active");

    if(globalNavbar.classList.contains("navbar-active")) {
        globalNavbarBtn.style.top="10px";
        globalNavbarBtn.style.border="1px solid var(--primary)";
        globalNavbar.style.animation="navAnimationBottom 1s ease-out ";
        globalNavbarBtn.style.animation="navAnimationBottom 1s ease-out, move-horizontal 1s infinite alternate ";  
        globalNavbar.classList.remove("navbar-active");
    }else{
        globalNavbar.classList.add("navbar-active");
        globalNavbarBtn.style.top="-41px";
        globalNavbar.style.animation="navAnimationTop 1s ease-out ";
        globalNavbarBtn.style.animation="navAnimationTop 1s ease-out ";
    }
};
