const slider = document.querySelector(".slider");
    let slideIndex = 0;

    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % 3;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + 3) % 3;
      showSlide(slideIndex);
    }
    setInterval(nextSlide, 3000);
    showSlide(slideIndex);