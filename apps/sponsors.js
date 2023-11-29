const sponsors = [
 "assets/sponsors0.png",
 "assets/sponsors1.png",
 "assets/sponsors2.png",
 "assets/sponsors3.png",
 "assets/sponsors4.png",
 "assets/sponsors5.png",
 "assets/sponsors6.png",
 "assets/sponsors7.png",
 "assets/sponsors8.png",
 "assets/sponsors9.png",
];
const sponsorsImages=document.querySelector(".sponsors-imgs");

sponsors.forEach((sponsor,index)=>{
    let sponsorsImage = document.createElement("img");
    sponsorsImage.src = sponsors[index];
    sponsorsImages.appendChild(sponsorsImage);
});