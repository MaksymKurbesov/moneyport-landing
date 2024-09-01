$(document).ready(function() {

    $('.popup-element--top').click(function(){
        $(this).next().fadeToggle(300)
        $(this).toggleClass('active')
    })

    var publicSwiper = new Swiper(".pub-swiper", {
        slidesPerView: 4, 
        spaceBetween: 24,
        loop: true,
        navigation: {
          nextEl: ".public-next",
          prevEl: ".public-prev",
        },
        breakpoints: {
            1300: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            576: { 
                slidesPerView: 1,
                spaceBetween: 20,
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
        }
    });

    var swiper = new Swiper(".trust-swiper", {
        slidesPerView: 4, 
        spaceBetween: 24,
        loop: true,
        navigation: {
          nextEl: ".media-next",
          prevEl: ".media-prev",
        },
        breakpoints: {
            1300: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: { 
                slidesPerView: 1,
                spaceBetween: 20,
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
        }
    });


    var swiper3 = new Swiper(".contact-swiper", {
        slidesPerView: 4, 
        spaceBetween: 24,
        loop: true,
        navigation: {
          nextEl: ".contact-next",
          prevEl: ".contact-prev",
        },
        breakpoints: {
            1300: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            576: { 
                slidesPerView: 1,
                spaceBetween: 20,
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
        }
    });

    var swiper2 = new Swiper(".friend-swiper", {
        effect: 'fade', 
        fadeEffect: {
            crossFade: true 
        },
        slidesPerView: 1, 
        loop: true,
        navigation: {
          nextEl: ".friends-next",
          prevEl: ".friends-prev",
        },
        on: {
            init: function () {
                document.querySelector('.total-slides').textContent = this.slides.length; 
                document.querySelector('.current-slide-count').textContent = this.realIndex + 1;
            },
            slideChange: function () {
                document.querySelector('.current-slide-count').textContent = this.realIndex + 1;
            },
        },

    });
})