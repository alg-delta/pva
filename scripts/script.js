//МЕГА СУПЕР КРУТІ ТАБИ
let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".curt");

for (let tab of tabs) {
  tab.addEventListener("click", onClickTab);
}
function onClickTab(event) {
  let activeTab = event.target;
  // console.log(activeTab);
  for (let tab of tabs) {
    tab.classList.remove("tabs-active");
  }
  activeTab.classList.add("tabs-active");

  let filter = activeTab.getAttribute("data-target");
  // console.log(filter);

  for (let card of cards) {
    let cardId = card.getAttribute("data-id");

    if (filter === cardId) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

for (let card of cards) {
  let cardId = card.getAttribute("data-id");

  if ("centre" === cardId) {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}

//slideeeeeeeeer
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let sliderNext = document.querySelector(".nextBtn");
let sliderBack = document.querySelector(".backBtn");
// console.log(slides);
// console.log(dots);
// console.log(sliderNext);
// console.log(sliderBack);
let activeSlide = 0;
snowSlide(activeSlide);
function snowSlide(n) {
  if (n > slides.length - 1) {
    activeSlide = 0;
  }
  if (n < 0) {
    activeSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[activeSlide].style.display = "flex";
  dots[activeSlide].classList.add("active");
}

sliderNext.addEventListener("click", function () {
  activeSlide = activeSlide + 1;
  snowSlide(activeSlide);
});
sliderBack.addEventListener("click", function () {
  activeSlide = activeSlide - 1;
  snowSlide(activeSlide);
});
for (let i = 0; i < slides.length; i = i + 1) {
  dots[i].addEventListener("click", function () {
    activeSlide = i;
    snowSlide(activeSlide);
  });
}

//ПУНКТИ МЕНЮ

let activeLink = document.querySelectorAll(".header-menu-link");
for (i of activeLink) {
  i.addEventListener("click", function (event) {
    for (i of activeLink) {
      i.classList.remove("active-link");
    }
    // console.log(event.target);
    event.target.classList.add("active-link");
  });
}
