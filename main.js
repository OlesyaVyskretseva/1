
/*jshint esversion: 6 */

let open1 = document.querySelectorAll(".modal-btn");

open1.forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open");
  });
});

document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("open");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open");
  }
});


document.querySelector("#my-modal .modal__box").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
});

document.getElementById('myForm1').addEventListener('submit', function(event) {
  event.preventDefault();
});

/*jshint esversion: 6 */

const menu = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".header__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });


menu.querySelectorAll('.header__nav_link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    body.classList.remove('lock');
  });
});
}

type="text/javascript">
    $(document).ready(function(){
$('.single__item').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});
});
