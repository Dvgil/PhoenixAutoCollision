

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // CLOSE OTHER FAQ ITEMS
    faqItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    // TOGGLE CURRENT ITEM
    item.classList.toggle("active");

  });

});


const images = document.querySelectorAll(".showcase-image");

let currentImage = 0;

setInterval(() => {

    images[currentImage].classList.remove("active");

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    images[currentImage].classList.add("active");

}, 4000);


const images_services =
document.querySelectorAll(".showcase-image_service");

const serviceTitle =
document.getElementById("serviceTitle");

const services = [
    "Body Work",
    "Paint Job",
    "Frame Repair",
    "Paint Correction"
];

let current = 0;

setInterval(() => {

    images_services[current].classList.remove("active");

    current++;

    if (current >= images_services.length) {
        current = 0;
    }

    images_services[current].classList.add("active");

    serviceTitle.textContent =
        services[current];

}, 4000);

