

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


  document.getElementById("year").textContent = new Date().getFullYear();

function updateLiveStatus() {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeInMinutes = (currentHour * 60) + currentMinute;

  // Highlight the current day in the list
  const currentDayRow = document.getElementById(`day-${currentDay}`);
  if (currentDayRow) {
    currentDayRow.classList.add('current-day');
  }

  // Define business schedule rules in minutes from midnight
  // Mon-Fri: 9:00 AM (540 mins) to 6:00 PM (1080 mins)
  // Sat: 10:00 AM (600 mins) to 4:00 PM (960 mins)
  // Sun: Closed
  let isOpen = false;

  if (currentDay >= 1 && currentDay <= 5) {
    if (currentTimeInMinutes >= 540 && currentTimeInMinutes < 1080) {
      isOpen = true;
    }
  } else if (currentDay === 6) {
    if (currentTimeInMinutes >= 600 && currentTimeInMinutes < 960) {
      isOpen = true;
    }
  }

  // Update Status Badge UI
  const badge = document.getElementById('status-badge');
  if (isOpen) {
    badge.textContent = "🟢 Open Now";
    badge.className = "status-badge open";
  } else {
    badge.textContent = "🔴 Closed Right Now";
    badge.className = "status-badge closed";
  }
}

// Run status logic on page load
document.addEventListener('DOMContentLoaded', updateLiveStatus); 