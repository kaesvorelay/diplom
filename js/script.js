(function () {

    const burger = document.querySelector('.toggle');

    const nav = document.querySelector('.menu__list');

    burger.addEventListener('click', () => {

        burger.classList.toggle('toggle--active');

        nav.classList.toggle('menu__list--active');



    })

    const elements = document.querySelector('.elements');

    window.onload = () => {

        elements.classList.add('elements--active');

    }

}());











new Swiper('.slider', {

    slidesPerView: 1,

    spaceBetween: 20,

    breakpoints: {

        768: {

            slidesPerView: 2

        },

        1024: {

            slidesPerView: 3,

            spaceBetween: 25



        }

    },

    loop: true,

    wrapperClass: 'slider__list',

    slideClass: 'slider__item',

    pagination: {

        el: '.slider__pagination',

        type: 'bullets',

        bulletClass: 'paginator__item',

        bulletActiveClass: 'paginator__item--active',

        clickable: true

    },

    navigation: {

        nextEl: '.slider__button--next',

        prevEl: '.slider__button--prev',

    },

    a11y: {

        prevSlideMessage: 'Предыдущий слайд',

        nextSlideMessage: 'Следующий слайд',

        paginationBulletMessage: 'Слудующий слайд {{index}}'

    },

});



let modal = document.getElementsByClassName("first-modal")[0];

let ButtonFirst = document.getElementsByClassName("open__first-modal")[0];

let ButtonSecond = document.getElementsByClassName("open__first-modal")[1];

let hide = document.getElementsByClassName("close")[0];



ButtonFirst.onclick = function () {

    modal.style.display = "block";

}



ButtonSecond.onclick = function () {

    modal.style.display = "block";

}



hide.onclick = function () {

    modal.style.display = "none";

}



window.onclick = function (event) {

    if (event.target == modal) {

        modal.style.display = "none"

    } else if (event.target == modalTwo) {

        modalTwo.style.display = "none"

    }

}



let modalTwo = document.getElementsByClassName("second-modal")[0];

let ButtonFirstMod = document.getElementsByClassName("open-second__modal")[0];

let ButtonSecondMod = document.getElementsByClassName("open-second__modal")[1];

let ButtonThirdMod = document.getElementsByClassName("open-second__modal")[2];

let hideTwo = document.getElementsByClassName("close")[1];



ButtonFirstMod.onclick = function () {

    modalTwo.style.display = "block";

}



ButtonSecondMod.onclick = function () {

    modalTwo.style.display = "block";

}



ButtonThirdMod.onclick = function () {

    modalTwo.style.display = "block";

}



hideTwo.onclick = function () {

    modalTwo.style.display = "none";

}