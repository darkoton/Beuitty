// let slidesServices = [
//   `
//   <div class="swiper-slide services__slide">
//     <img src="./img/services/slide1.png" alt="" class="services__img">
//     <div class="services__slide-text">
//       <h4 class="services__slide-title">Classical Facial</h4>
//       <h5 class="services__slide-subtitle">Facial</h5>
//     </div>
//   </div>
//   `,
//   `
//   <div class="swiper-slide services__slide">
//     <img src="./img/services/slide2.png" alt="" class="services__img">
//     <div class="services__slide-text">
//       <h4 class="services__slide-title">Idea & Material</h4>
//       <h5 class="services__slide-subtitle">Premium hair cutting</h5>
//     </div>
//   </div>
//   `,
//   `
//   <div class="swiper-slide services__slide">
//     <img src="./img/services/slide3.png" alt="" class="services__img">
//     <div class="services__slide-text">
//       <h4 class="services__slide-title">Concentrate shampoo</h4>
//       <h5 class="services__slide-subtitle">Hair wash</h5>
//     </div>
//   </div>
//   `
// ]


// function appendSlides() {
//   event.preventDefault();
//   swiper.appendSlide(slidesServices)
//   inputRange.max = swiper.snapGrid.length
// }



let swiper

function initSwiper() {
  swiper = new Swiper(".services__slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.services__slider-counter',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span id="count" class="' + currentClass + '"></span>' +
          '<span class="gray"> of ' +
          '<span class="' + totalClass + '"></span></span>';
      }
    },

  });

  swiper.on('progress', function (swiper, progress) {

    console.log();

    if (progress < 0 || progress > 1) return
    update(progress, Math.round(progress * swiper.slides.length))
  });

  swiper.on('slideChange', function (swiper) {
    if (swiper.progress < 0 || swiper.progress > 1) return
    update(swiper.progress, Math.round(swiper.progress * swiper.slides.length))
  });

}

if (window.innerWidth > 750) {
  initSwiper()
}



let inputRange = document.getElementById('slider-range');
let demo = document.querySelector('.services__slider-demo')
let demoValue = demo.querySelector('span')
let demoBall = demo.querySelector('.services__slider-demo-ball')
let count = document.getElementById('count')
document.querySelector('.services__slider-demo-start').style.width = (1 / 12).toFixed(2) * 100 + 1 + "%"


inputRange.addEventListener('input', (event) => {
  swiper.slideTo(inputRange.value - 1)
})

function update(value = 0, counter = 0) {
  demoValue.style.width = value.toFixed(2) * 100 + 1 + "%"
  demoBall.style.left = value.toFixed(2) * 100 + "%"
  if (counter == 0) return
  inputRange.value = counter
}


let swiper2 = new Swiper(".reviews__swiper", {
  grabCursor: true,
  effect: "creative",
  direction: "vertical",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: [0, "50%", -400],
      scale: 0.7
    },
  },
});

if (swiper && window.innerWidth <= 750 && swiper.destroyed != true) {
  swiper.disable()
  swiper.destroy()
}

window.addEventListener("resize", () => {

  if (swiper && window.innerWidth <= 750 && swiper.destroyed != true) {
    swiper.disable()
    swiper.destroy()
  } else if (window.innerWidth > 750) {
    console.log('init');
    initSwiper()
  }

});

