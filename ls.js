document.addEventListener("DOMContentLoaded", function() {
    let slides = document.getElementsByClassName("slide");
    let index = 0;

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }
        index++;
        if (index > slides.length) { index = 1; }
        slides[index - 1].style.opacity = 1;
        setTimeout(showSlides, 4000); // Change to 4000ms (4 seconds)
    }

    showSlides();
});

