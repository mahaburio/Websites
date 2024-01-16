var swiper = new Swiper(".secondSwipers", {
      slidesPerView: "3",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      loop : true,
      autoplay : {
        delay : 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        575: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });

    var swiper = new Swiper(".secondSwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      loop : true,
      autoplay : {
        delay : 3000,
        disableOnInteraction: false,
      }
    });



var swiper = new Swiper(".firstSwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-paginations",
        clickable: true,
      },
      navigation: {
        nextEl: ".first-next-btn",
        prevEl: ".second-next-btn",
      },
      loop : true,
      autoplay : {
        delay : 5000,
        disableOnInteraction: false,
      }
    });

    
