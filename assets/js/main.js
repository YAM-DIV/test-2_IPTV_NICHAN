// Start navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
// End navbar
// Start bgcolor scrolled

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
		
    } else {
        header.classList.remove('scrolled')
    }
});

// End bgcolor scrolled

// Start Section active
const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 80 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
// End Section active
// Start change div

let btn_diva = document.getElementById("btn_diva");
let btn_divb = document.getElementById("btn_divb");
let diva = document.getElementById("diva");
let divb = document.getElementById("divb");
let rectangular = document.getElementById("rectangular");
let circle = document.getElementById("circle");

btn_diva.addEventListener('click', ()=> {
    btn_diva.classList.add('active');
    btn_divb.classList.remove('active');
    diva.style.display = 'block';
    divb.style.color = 'red';
    divb.style.display = 'none';
    circle.classList.remove('active');
});

// circle.addEventListener('click', ()=> {
//     diva.style.display = 'none';
//     divb.style.display = 'block';
//     circle.classList.add('active');
// });

btn_divb.addEventListener('click', ()=> {
    btn_diva.classList.remove('active');
    btn_divb.classList.add('active');
    diva.style.display = 'none';
    divb.style.display = 'block';
    circle.classList.add('active');
});

// End change div

// Start Slider Swiper
var Swiper = new Swiper(".card_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
// End Slider Swiper

// Start Scroll To Top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
      scrollProgress.style.display = "grid";
  } else {
      scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#D3392D ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// End Scroll To Top
