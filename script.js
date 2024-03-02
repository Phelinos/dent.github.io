document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = "none";
            testimonial.style.opacity = (i === index) ? 1 : 0.8;
        });
    }

    function nextTestimonial() {
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonials.length) {
            currentTestimonialIndex = 0;
        }
        showTestimonial(currentTestimonialIndex);
    }

    function prevTestimonial() {
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonials.length - 1;
        }
        showTestimonial(currentTestimonialIndex);
    }

    showTestimonial(currentTestimonialIndex);

    nextButton.addEventListener("click", nextTestimonial);
    prevButton.addEventListener("click", prevTestimonial);
});
