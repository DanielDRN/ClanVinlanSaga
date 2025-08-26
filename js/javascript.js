const carousel = document.getElementById('carouselSlide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalCards = carousel.children.length;
const cardWidth = 350 + 24;

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

function handleResize() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
        carousel.style.transform = 'translateX(0)';
        carousel.classList.remove('flex-row', 'flex-wrap');
        carousel.classList.add('flex-col', 'items-center');
    } else {
        carousel.classList.remove('flex-col', 'items-center');
        carousel.classList.add('flex-row');
        updateCarousel();
    }
}

window.addEventListener('resize', handleResize);
handleResize();
