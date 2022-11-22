const header = document.getElementById("nav-container");
// let headerHeight = header.offsetHeight;
let mybutton = document.getElementById("topBtn");
let lastScroll = 0;
let slideIndex = 1;
AOS.init();
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

                       
//function array not suitable for running all scroll functions                       
// window.onscroll = function() {scrollFunction(), openNav(), navShow()};

//hide overlay on scroll down
document.addEventListener('scroll', () => {
   const currentScroll = window.pageYOffset;
        if (currentScroll > 0){
            // document.getElementById("overlay").style.width = "0%";
            document.getElementById("overlay").style.height = "0%";
        }
});

//show/hide navbar on scroll up/down
document.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0){
        header.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !header.classList.contains("scroll-down")){
        header.classList.remove("scroll-up")
        header.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && header.classList.contains("scroll-down")){
        header.classList.remove("scroll-down")
        header.classList.add("scroll-up")
    }

    
    lastScroll = currentScroll;
});

//show scroll to top button halfway through the page
document.addEventListener('scroll', () => {
    if (document.body.scrollTop > height/2 || document.documentElement.scrollTop > height/2) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//swiper init
const swiper = new Swiper(".myProjects", {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      breakpoints: {
        720: {
          slidesPerView: 2,
          spaceBetween: 50,
          slidesPerGroup: 2,
        },
      },
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});



// JS Carousel

// const swiperMain = new Swiper('.swiper', {
//         // Optional parameters
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         loop: true,
//         slidesPerView: 'auto',
//         coverflowEffect: {
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,},
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
// });


// scroll to top button show on scroll down
// function scrollFunction() {
//   if (document.body.scrollTop > height/2 || document.documentElement.scrollTop > height/2) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


// show navbar onscroll function
// function navShow(){
//     const currentScroll = window.pageYOffset;

//     if (currentScroll <= 0){
//         header.classList.remove("scroll-up")
//     }

//     if (currentScroll > lastScroll && !header.classList.contains("scroll-down")){
//         header.classList.remove("scroll-up")
//         header.classList.add("scroll-down")
//     }
//     if (currentScroll < lastScroll && header.classList.contains("scroll-down")){
//         header.classList.remove("scroll-down")
//         header.classList.add("scroll-up")
//     }

//     lastScroll = currentScroll;
// }





// Overlay hide on scroll down
// function hideOverlay() {
//         const currentScroll = window.pageYOffset;
//         if (currentScroll > 0){
//             document.getElementById("overlay").style.height = "0%";
//         }
//         // else { overlay show when page is on top
//         //     document.getElementById("overlay").style.height = "100%";
//         // }
// }

// resize function 
// window.addEventListener('resize', () => {
//     padding = header.clientHeight;
//     document.getElementById("main-contents").style.paddingTop = padding;
//     console.log(padding);
// })

// close button
// function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
// }

// set html/css value on load (responsive)