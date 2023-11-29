let globalHeader=document.querySelector(".global-header");

let distance= 200;

window.onscroll = function () {
    FixedNav();
}

const FixedNav=()=>{
    console.log(distance);
    if(window.scrollY>distance){
        globalHeader.style.display="flex";
        globalHeader.style.position="fixed";
        globalHeader.style.animation = "navAnimationBottom 1s ease-out";
      
    }else{
        globalHeader.style.display="none";
        globalHeader.style.animation = "none";
    }
}