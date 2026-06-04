document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.slider-wrapper');
    if (!wrapper) return;

    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.getElementById('prevSlide');
    const btnNext = document.getElementById('nextSlide');
    
    let currentIndex = 0;

    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    // Автопрокрутка каждые 5 секунд
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000);
});