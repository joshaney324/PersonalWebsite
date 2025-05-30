window.onload = function() {
    showSlide(".ml_1", 1);
    showSlide(".ml_2", 1);
    showSlide(".ml_3", 1);
    showSlide(".ml_4", 1);
    showSlide(".bike_webapp", 1)
    showSlide(".asl_detection", 1);
    showSlide(".unity", 1);
}

function showSlide(id, direction) {
    let slideShow = document.querySelector(id);
    let slideIndex = +(slideShow.getAttribute("data-index") ?? 0) + direction;
    let i;
    let slides = [...slideShow.querySelectorAll(".mySlides")];
    // let dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

    let caption = slideShow.querySelector(".caption");
    caption.innerHTML = `${slideIndex} / ${slides.length}: ${slides[slideIndex-1].getAttribute('data-caption')}`;

    slideShow.setAttribute("data-index", slideIndex);
}