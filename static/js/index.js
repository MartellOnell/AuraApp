function tabsSlider() {
    var swiper = new Swiper('.all-stream__tabs .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 12,
    })
}

function slider() {
    var swiper = new Swiper('.slider1 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 6,
        navigation: {
            nextEl: '.slider1 .swiper-button-next',
            prevEl: '.slider1 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1350: {
                slidesPerView: 4,
            },
        }
    })
}

function slider2() {
    var swiper = new Swiper('.slider2 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 6,
        navigation: {
            nextEl: '.slider2 .swiper-button-next',
            prevEl: '.slider2 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1350: {
                slidesPerView: 4,
            },
        }
    })
}

$(document).ready(function() {
    $(".select").niceSelect()
    tabsSlider()
    slider()
    slider2()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".lk__sidebar").toggleClass("lk__sidebar--active")
        $("body").toggleClass("fixed-body")
    })

    $(".modal__tab").click(function() {
        let path = $(this).attr("data-tab-path")
            // console.log(path)
        $(".modal__tab").removeClass("modal__tab--active")
        $(this).addClass("modal__tab--active")
        $(".modal__content").removeClass("modal__content--active")
        $(`.modal__content[data-tab-path="${path}"]`).addClass("modal__content--active")
    })

})