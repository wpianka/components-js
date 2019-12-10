const carousel = document.querySelector("[data-target='carousel']");
const card = document.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const back = document.querySelector("[data-action='backToStart']");
const autoplay = document.querySelector("[data-action='autoPlay']");
const stopplay = document.querySelector("[data-action='stopPlay']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -((cardCount/3) * carouselWidth + (cardMarginRight * (cardCount / 3)) - carouselWidth - cardMarginRight );

var play; 

leftButton.addEventListener("click", function() {
    if (offset !== 0) {
      offset += carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
      }
  })

rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});

back.addEventListener("click", function() {
    if (offset !== 0) {
        offset = 0;
        carousel.style.transform = `translateX(${offset}px)`;
        }
});

play = setInterval(slide, 5000);

autoplay.addEventListener("click", function(){
   play = setInterval(slide, 5000);
})

stopplay.addEventListener("click", function(){
    clearInterval(play);
})

function stopSlide() {
    clearInterval(play);
}


function slide() {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    } else if (offset !== 0) {
        offset = 0;
        carousel.style.transform = `translateX(${offset}px)`;
    } else {
        stopSlide();
    }
}