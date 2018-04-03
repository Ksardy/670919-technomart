var search = document.querySelector(".js-button");
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=yname]");
var mail = popup.querySelector("[name=ymail]");
var map = document.querySelector(".js-map");
var form = popup.querySelector("form");
var modal_map = document.querySelector(".modal-map");
var close_map = modal_map.querySelector(".modal-close");
var slide_1 = document.querySelector(".js-slide-1");
var slide_2 = document.querySelector(".js-slide-2");
var slide_3 = document.querySelector(".js-slide-3");
var text_1 = document.querySelector(".js-text_1");
var text_2 = document.querySelector(".js-text_2");
var text_3 = document.querySelector(".js-text_3");
var inbasket = document.querySelectorAll(".button-shop_one");
var modal_shop = document.querySelector(".modal-shop");

slide_1.addEventListener("click", function(evt) {
  evt.preventDefault();
  slide_1.classList.add("current_servis");
  text_1.classList.add("show");
  text_2.classList.remove("show");
  text_3.classList.remove("show");
  slide_2.classList.remove("current_servis");
  slide_3.classList.remove("current_servis");
});

slide_3.addEventListener("click", function(evt) {
  evt.preventDefault();
  slide_3.classList.add("current_servis");
  text_3.classList.add("show");
  text_2.classList.remove("show");
  text_1.classList.remove("show");
  slide_2.classList.remove("current_servis");
  slide_1.classList.remove("current_servis");
});

slide_2.addEventListener("click", function(evt) {
  evt.preventDefault();
  slide_2.classList.add("current_servis");
  text_2.classList.add("show");
  text_1.classList.remove("show");
  text_3.classList.remove("show");
  slide_1.classList.remove("current_servis");
  slide_3.classList.remove("current_servis");
});

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("showtwo");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("showtwo");
  popup.classList.remove("error");
});

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.add("showtwo");
});

close_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.remove("showtwo");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    popup.classList.add("error");
  }
}); 