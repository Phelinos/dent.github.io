document.addEventListener("DOMContentLoaded", function () {
    const testimonialBox = document.querySelector(".testimonial-box");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const testimonials = document.querySelectorAll(".testimonial");

    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = "none";
            testimonial.style.opacity = 0.8;
        });
        testimonials[index].style.display = "block";
        testimonials[index].style.opacity = 1;
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
