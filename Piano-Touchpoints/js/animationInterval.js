function toggleAnimationClass(id, toggleClass) {
  let element = document.getElementById(id);
  element.classList.toggle(toggleClass);
}

setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      toggleAnimationClass("sticky-banner-cta", "animateElement-entry__shake");
    }, i * 2000);
  }
}, 3000);

/* let nIntervId;

document.addEventListener("DOMContentLoaded", function () {
  if (!nIntervId) {
    nIntervId = setInterval(() => toggleAnimationClass("sticky-banner-cta", "plus-banner-shake"), 2000, true);
  }
});


// Stop Animation-Intervall on mouseover
document.getElementById("sticky-banner-cta").addEventListener("click", function () {
  if (animatorIntervallID) {
    clearInterval(animatorIntervallID);
    console.log("calm it");
    animatorIntervallID = null;
  }
});
 */

const bannerTextArray = ["Tolle Rabatte und viel Geld sichern!", "Nicht zögern!", "loslegen", "reden"];
const purgedTextArray = bannerTextArray.filter((word) => word.length > 1);

let purgedTextArrayCounter = 0;
let objectCount = purgedTextArray.length;
let animatorActive = true;
let animatorIntervallID;

console.log(objectCount);

if (animatorActive == true) {
  if (!animatorIntervallID) {
    animatorIntervallID = setInterval(animatedTextChange, objectCount * 2000);
  }
}

function animatedTextChange() {
  // document.getElementById("plus-banner__text").setAttribute("class", "text-fade");
  document.getElementById("plus-banner__text").classList.add("animateElement-entry__splash");
  // document.getElementById("plus-banner__alterText").setAttribute("class", "text-show");
  //document.getElementById("plus-banner__alterText").classList.toggle("text-show");

  setTimeout(() => {
    document.getElementById("plus-banner__text").innerHTML = bannerTextArray[purgedTextArrayCounter];
    //  document.getElementById("plus-banner__alterText").classList.toggle("text-fade");
    //document.getElementById("plus-banner__alterText").setAttribute("class", "text-fade");
    //document.getElementById("plus-banner__text").classList.toggle("text-show");
    //document.getElementById("plus-banner__text").classList.toggle("text-fade");
    //document.getElementById("plus-banner__text").setAttribute("class", "text-show");
  }, 1000);
  setTimeout(() => {
    // document.getElementById("plus-banner__text").innerHTML = text[purgedTextArrayCounter];
    //  document.getElementById("plus-banner__alterText").classList.toggle("text-fade");
    //document.getElementById("plus-banner__alterText").setAttribute("class", "text-fade");
    document.getElementById("plus-banner__text").classList.toggle("animateElement-entry__splash");
    document.getElementById("plus-banner__text").classList.toggle("animateElement-exit__rightOut");
    //document.getElementById("plus-banner__text").setAttribute("class", "text-show");
  }, 0);
  setTimeout(() => {
    // document.getElementById("plus-banner__text").innerHTML = text[purgedTextArrayCounter];
    //  document.getElementById("plus-banner__alterText").classList.toggle("text-fade");
    //document.getElementById("plus-banner__alterText").setAttribute("class", "text-fade");
    document.getElementById("plus-banner__text").classList.toggle("animateElement-entry__splash");
    document.getElementById("plus-banner__text").classList.toggle("animateElement-exit__rightOut");
    //document.getElementById("plus-banner__text").setAttribute("class", "text-show");
  }, 2000);

  purgedTextArrayCounter++;

  if (purgedTextArrayCounter >= purgedTextArray.length) {
    purgedTextArrayCounter = 0;
  }
}

// Stop Animation-Intervall on mouseover
document.getElementById("plus-banner__close").addEventListener("click", function () {
  if (animatorIntervallID) {
    clearInterval(animatorIntervallID);
    console.log("calm it");
    animatorIntervallID = null;
    document.getElementsByClassName("plus-banner-wrapper")[0].style.display = "none";
  }
});
