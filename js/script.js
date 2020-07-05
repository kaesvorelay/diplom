(function () {
  const burger = document.querySelector(".toggle");
  const nav = document.querySelector(".menu__list");
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle--active");
    nav.classList.toggle("menu__list--active");
  });

  const elements = document.querySelector(".elements");
  window.onload = () => {
    elements.classList.add("elements--active");
  };
})();

new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  loop: true,
  wrapperClass: "slider__list",
  slideClass: "slider__item",
  pagination: {
    el: ".slider__pagination",
    type: "bullets",
    bulletClass: "paginator__item",
    bulletActiveClass: "paginator__item--active",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__button--next",
    prevEl: ".slider__button--prev",
  },
  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    paginationBulletMessage: "Слудующий слайд {{index}}",
  },
});

let modal = document.getElementsByClassName("first-modal")[0];
let ButtonFirst = document.getElementsByClassName("open__first-modal")[0];
let ButtonSecond = document.getElementsByClassName("open__first-modal")[1];
let hide = document.getElementsByClassName("close")[0];

ButtonFirst.onclick = function () {
  modal.style.display = "block";
};

ButtonSecond.onclick = function () {
  modal.style.display = "block";
};

hide.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
};

let modalTwo = document.getElementsByClassName("second-modal")[0];
let ButtonFirstMod = document.getElementsByClassName("open-second__modal")[0];
let ButtonSecondMod = document.getElementsByClassName("open-second__modal")[1];
let ButtonThirdMod = document.getElementsByClassName("open-second__modal")[2];
let hideTwo = document.getElementsByClassName("close")[1];

ButtonFirstMod.onclick = function () {
  modalTwo.style.display = "block";
};

ButtonSecondMod.onclick = function () {
  modalTwo.style.display = "block";
};

ButtonThirdMod.onclick = function () {
  modalTwo.style.display = "block";
};

hideTwo.onclick = function () {
  modalTwo.style.display = "none";
};

let input = document.querySelectorAll(`input[type = "tel"]`);
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(input);

let popupWrapperFirst = document.querySelector(".first-modal");
let popup = popupWrapperFirst.querySelector(".modal__content");
let popupForm = popup.querySelector(".modal__form");
let popupMessege = popup.querySelector(".modal__thanks");

const showMessage = () => {
  popupMessege.classList.add("modal__thanks--active");
  popupForm.classList.add("modal__form--hide");
};



let popupWrapperSecond = document.querySelector(".second-modal");
let popupSecond = popupWrapperSecond.querySelector(".modal__content");
let popupFormSecond = popupSecond.querySelector(".modal__form");
let popupMessegeSecond = popupSecond.querySelector(".modal__thanks");

const showMessageSecond = () => {
  popupMessegeSecond.classList.add("modal__thanks--active");
  popupFormSecond.classList.add("modal__form--hide");
};



function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form, values, ajax) {
      showMessage();
      showMessageSecond();
      console.log(form);
      let formData = new FormData(form);

      fetch("mail.php", {
        method: "POST",
        body: formData,
      }).then(function (data) {
        console.log(data);
        console.log("Отправлено");
        form.reset();
      });
    },
  });
}

validateForms(".modal__form", {
  email: {
    required: true,
    email: true,
  },
  fio: {
    required: true,
  },
  tel: {
    required: true,
  },
});

validateForms(".modal__form-2", {
  email: {
    required: true,
    email: true,
  },
  fio: {
    required: true,
  },
  tel: {
    required: true,
  },
});