let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    const offset = -index * 100 / totalItems;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);