const carousel = document.getElementById("carouselSlide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const memberCards = document.querySelectorAll(".member-card");
const memberCardWidth = memberCards[0].offsetWidth + 24;
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * memberCardWidth}px)`;
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
    currentIndex = memberCards.length - 1;
    }
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < memberCards.length - 1) {
        currentIndex++;
    } else {
    currentIndex = 0;
}
    updateCarousel();
});

window.addEventListener("resize", () => {
    currentIndex = 0;
    updateCarousel();
});

document.getElementById("menu").addEventListener("change", (e) => {
const nav = document.querySelector("nav");
    if (e.target.checked) {
    nav.style.display = "block";
    } else {
    nav.addEventListener(
        "animationend",
        () => {
        if (!e.target.checked) {
            nav.style.display = "none";
        }
        },
        { once: true }
    );
    }
});
