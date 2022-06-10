// Header sections
const header = document.querySelector("#header");
const scrollValue = window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 50) {
        header.classList.add('bg-header')
    } else {
        header.classList.remove('bg-header')
    }
});
// Header sections nav hide show
const navToggler = document.querySelector('.toggle-btn');
navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('close-toggle')
});

// hide Show header

let prevScroll = window.pageYOffset;
window.onscroll = function() {
    let currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        header.style.top = "0";
    } else {
        header.style.top = "-80px";
    }
    prevScroll = currentScroll;
};

// Header sections


// PopUp Section
const popupTrigger = document.querySelector(".popup-trigger")
const popup = document.querySelector(".popup")
const popupContent = document.querySelector(".popup .content")
const closePopup = document.querySelector(".close-popup")


popupTrigger.addEventListener("click", function() {
    popup.classList.add("visible")
})
closePopup.addEventListener("click", function() {
    popup.classList.remove("visible")
})
popup.addEventListener("click", function(e) {
    if (popupContent.contains(e.target)) {
        // mission Successfull
    } else {
        popup.classList.remove("visible")
    }
});
// PopUp Section

// faq
const faqButton = document.querySelectorAll('.question-btn');
faqButton.forEach((accordion) => {
    accordion.onclick = function() {
        this.classList.toggle('btn-color');
        this.nextElementSibling.classList.toggle("active");
        content.style.maxHeight = content.scrollHeight + "px";

    };
});

;

// faq
new WOW().init();

var rellax = new Rellax('.rellax');
// slider section



// slider section